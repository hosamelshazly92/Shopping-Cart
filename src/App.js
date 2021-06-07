import React, { useState } from "react";
import "./App.css";
import GlobalStyles from "./GlobalStyles";
import { NavBar, Overlay, MainContainer } from "./AppStyles";
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

      <MainContainer>
        { toggle && <Overlay /> }
      </MainContainer>
    </>
  );
}

export default App;
