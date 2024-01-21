import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const SocialButton = ({ icoFace, icoGit, icoInsta }) => {
  return (
    <section>
      <Button className="imgRedondo" href="https://web.facebook.com">
        <img src={icoFace} alt="Icono de Facebook" />
      </Button>
      <Button className="imgRedondo" href="https://github.com">
        <img src={icoGit} alt="Icono de Git" />
      </Button>
      <Button className="imgRedondo" href="https://www.instagram.com">
        <img src={icoInsta} alt="Icono de Instagram" />
      </Button>
      <h6>O usa tu email para registrarte</h6>
    </section>
  );
};

SocialButton.propTypes = {
  icoFace: PropTypes.string.isRequired,
  icoGit: PropTypes.string.isRequired,
  icoInsta: PropTypes.string.isRequired,
};
export default SocialButton;
