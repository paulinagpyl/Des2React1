import Button from "react-bootstrap/Button";

const SocialButton = ({ icoFace, icoGit, icoInsta }) => {
  return (
    <>
      <section>
        <Button className="imgRedondo" href="https://web.facebook.com">
          <img src={icoFace} alt="Icono de face"/>
        </Button>
        <Button className="imgRedondo" href="https://github.com">
          <img src={icoGit} alt="Icono de Git" />
        </Button>
        <Button className="imgRedondo" href="https://www.instagram.com">
          <img src={icoInsta} alt="Icono de Instagram" />
        </Button>
        <h6>O usa tu email para registrarte</h6>
      </section>
    </>
  );
};

export default SocialButton;
