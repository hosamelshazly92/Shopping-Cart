import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import GlobalStyles from "./GlobalStyles";
import { NavBar, Overlay, MainContainer } from "./AppStyles";
import Cart from './components/Cart/index';
import Context from './store/Context';

function App() {
  const [toggle, setToggle] = useState(false);

  const context = useContext(Context);

  useEffect(() => {
    console.log(context);
  }, [context]);

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
