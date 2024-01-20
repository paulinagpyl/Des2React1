import { useState } from "react";
import "./App.css";
import Registro from "./components/Registro";

function App() {
  const [error, setError] = useState("")
  
  return (
    <>
      <Registro
        error={error}
        setError = {setError}
      />
    </>
  );
}

export default App;
