import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    .then((response) => {
      console.log(response.data);
      axios.defaults.withCredentials
        ? (window.location.href = "/")
        : (window.location.href = "/login");
    })
    .catch((e) => {
      console.log(e);
      window.location.href = "/login";
    });
};

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" ref={emailRef} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" ref={passwordRef} />
              </div>
              <button className="btn btn-primary" onClick={login}>Login</button>

              <div>
                <br />
                <Link to="/register" className="btn btn-secondary ms-2">
                  ¿No tienes cuenta? Regístrate
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
 