import React from "react";
import "./App.css";
import GlobalStyles from "./GlobalStyles";
import { NavBar } from "./AppStyles";
import Cart from './components/Cart/index';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar>
        <Cart />
      </NavBar>
    </>
  );
}

export default App;
