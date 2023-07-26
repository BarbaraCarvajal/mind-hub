import { useRef } from "react";
import axios from "axios";

const Login = () => {
  let passwordRef = useRef();
  let emailRef = useRef();

  const login = () => {

    axios.defaults.withCredentials = true;

    console.log("contraseña: " + passwordRef.current.value + " email: " + emailRef.current.value);
    axios.post("http://localhost:9095/api/login", {
      password: passwordRef.current.value,
      email: emailRef.current.value
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
  }

  return (
    <>
      <label htmlFor="">
        Email
        <input type="text" ref={emailRef} />
      </label>
      <label htmlFor="">
        Password
        <input type="password" ref={passwordRef} />
      </label>
      <button onClick={login}>Login</button>
    </>
  );
}

export default Login;
