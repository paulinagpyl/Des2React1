import { useState } from "react";
import "./App.css";
import Registro from "./components/Registro";

const App = () => {
  const [error, setError] = useState("");

  return <Registro error={error} setError={setError} />;
};

export default App;

//Tengo la configuracion del vscode distinta, si no les gusta el formateo que le dio, disculpen :c
