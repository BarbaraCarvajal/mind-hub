import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const rolRef = useRef(); 

  const [error, setError] = useState("");

  const handleRegister = () => {
    setError("");

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const rol = rolRef.current.value;

    // Validaciones básicas
    if (!name || !email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const userData = { name, email, password, rol };

    axios.post("http://localhost:9095/api/usuarios", userData)
      .then((response) => {
        console.log(response.data);
        setSuccessMessage("Registro exitoso. Redirigiendo a la página de inicio...");

        // Redirigir a la página de login después de 2 segundos
        setTimeout(() => {
          history.push("/login"); // Ruta de la página de inicio
        }, 2000);
      })
      .catch((error) => {
        console.log(error.response.data);
        setError("Hubo un error en el registro. Por favor, inténtalo de nuevo.");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
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
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" ref={confirmPasswordRef} />
              </div>
              <div className="form-group">
                <label htmlFor="rol">Rol</label>
                <input type="text" className="form-control" id="rol" ref={rolRef} />
              </div>
              <button className="btn btn-primary" onClick={handleRegister}>
                Register
              </button>
              <p className="mt-2">
                Already have an account? <Link to="/login">Login</Link>
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


/* import React, { useRef } from "react";
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
              <div className="form-group">
                <label htmlFor="rol">Rol</label>
                <input type="text" className="form-control" id="rol" ref={rolRef} />
              </div> 
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
 */