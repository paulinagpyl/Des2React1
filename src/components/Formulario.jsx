import { useState } from "react";
import PropTypes from "prop-types";

const Formulario = ({ setError }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validarDatos = (e) => {
    e.preventDefault();

    const { nombre, email, password, confirmPassword } = formData;
    const DatosValidar = !nombre || !email || !password || !confirmPassword;
    const validarPass = password !== confirmPassword;
    // Agregue expresion regular en el email
    const validarMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (DatosValidar) {
      setError({
        error: true,
        msg: "Debes completar todos los datos",
        color: "warning",
      });
    } else if (!validarMail) {
      setError({
        error: true,
        msg: "El formato del correo electrónico no es válido",
        color: "warning",
      });
    } else if (
      // Agregue expresion regular en contraseña y la hice un poco mas segura
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/\d/.test(password)
    ) {
      setError({
        error: true,
        msg: "La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula y un número",
        color: "warning",
      });
    } else if (validarPass) {
      setError({
        error: true,
        msg: "Las contraseñas no coinciden, prueba nuevamente",
        color: "danger",
      });
      return;
    } else {
      setError({
        error: false,
        msg: "Registro creado exitosamente",
        color: "success",
      });
    }

    setFormData({
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="formulario" onSubmit={(e) => validarDatos(e)}>
      <div className="form-group">
        <br />
        <input
          type="text"
          name="nombre"
          className="form-control"
          placeholder="Nombre"
          onChange={handleChange}
          value={formData.nombre}
        />
      </div>
      <div className="form-group">
        <br />
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="micorreo@ejemplo.com"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="form-group">
        <br />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Contraseña"
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      <div className="form-group">
        <br />
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          placeholder="Confirma tu contraseña"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary fullWidth">
        Registrarse
      </button>
      <br />
    </form>
  );
};

Formulario.propTypes = {
  setError: PropTypes.func.isRequired,
};

export default Formulario;
