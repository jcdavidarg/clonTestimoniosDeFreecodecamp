import React from "react";
import "./App.css";
import Testimonios from "./components/Testimonios";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="contenedor-principal">
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          <Testimonios />
        </div>
      </div>
    );
  }
}

export default App;
