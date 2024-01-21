import Alert from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import PropTypes from "prop-types";

const Registro = ({ error, setError }) => {
  return (
    <section className="card">
      <h1>Crea una cuenta</h1>
      <SocialButton
        icoFace={"face.svg"}
        icoGit={"git.svg"}
        icoInsta={"insta.svg"}
      />
      <Formulario setError={setError} />
      <Alert color={error.color} error={error.msg} />
    </section>
  );
};

Registro.propTypes = {
  error: PropTypes.shape({
    color: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }).isRequired,
  setError: PropTypes.func.isRequired,
};

export default Registro;
