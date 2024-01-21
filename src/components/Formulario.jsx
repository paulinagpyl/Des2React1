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
    const validarMail =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (DatosValidar) {
      setError({
        error: true,
        msg: "Debes completar todos los datos",
        color: "warning",
      });
    } else if (!validarMail.test(email)) {
      setError({
        error: true,
        msg: "El formato del correo electrónico no es válido",
        color: "warning",
      });
    } else {
      setError({
        error: false,
        msg: "Login creado exitosamente",
        color: "success",
      });
    }

    if (validarPass) {
      setError({
        error: true,
        msg: "Las contraseñas no coinciden, prueba nuevamente",
        color: "danger",
      });
      return;
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
