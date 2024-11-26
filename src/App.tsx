// App.js
import React from "react";
import Logo from "./components/Logo";
import Navegacao from "./components/Navegacao";
import Topo from "./components/Topo";
import Principal from "./components/Principal"; 

const App = () => {
  return (
    <>
      <header className="topo">
        <Principal />
        <Logo />
        <Navegacao />
      </header>
    </>
  );
}

export default App;