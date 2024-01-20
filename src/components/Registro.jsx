import Alert from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

const Registro = ({ error, setError }) => {
  return (
    <>
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
    </>
  );
};

export default Registro;
