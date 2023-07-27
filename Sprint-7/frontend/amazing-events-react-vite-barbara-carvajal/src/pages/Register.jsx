import React, { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const rolRef = useRef(); // Si también necesitas el campo "rol" en el formulario

  const handleRegister = () => {
    axios.defaults.withCredentials = true;

    const userData = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
      rol: rolRef.current.value // Si también necesitas el campo "rol" en el formulario
    };

    axios.post("http://localhost:9095/api/register", userData)
      .then((response) => {
        console.log(response.data);
        // Manejar el registro exitoso aquí (redirección, mensaje, etc.)
      })
      .catch((error) => {
        console.log(error);
        // Manejar el error en el registro aquí (mensaje de error, etc.)
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" ref={nameRef} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" ref={emailRef} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" ref={passwordRef} />
              </div>
              {/* Si necesitas el campo "rol" en el formulario */}
              {/* <div className="form-group">
                <label htmlFor="rol">Rol</label>
                <input type="text" className="form-control" id="rol" ref={rolRef} />
              </div> */}
              <button className="btn btn-primary" onClick={handleRegister}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
