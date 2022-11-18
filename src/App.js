import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import Counter from "./components/Counter";
import freeCodeCampLogo from "./imgs/freecodecamp-logo.svg";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Counter counter={counter} />
        <Button text="Click" isButtonClick={true} handleClick={handleClick} />
        <Button text="Reset" isButtonClick={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
