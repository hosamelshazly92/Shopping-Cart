import React, { useState } from "react";
import "./App.css";
import GlobalStyles from "./GlobalStyles";
import { NavBar } from "./AppStyles";
import Cart from './components/Cart/index';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <GlobalStyles />
      <NavBar>
        <Cart 
          toggle={toggle}
          setToggle={setToggle}
        />
      </NavBar>
    </>
  );
}

export default App;
