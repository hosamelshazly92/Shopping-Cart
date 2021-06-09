import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import GlobalStyles from "./GlobalStyles";
import { NavBar, Overlay, MainContainer, ProductList } from "./AppStyles";
import Cart from './components/Cart/index';
import Context from './store/Context';
import { Product } from './components/Product';

function App() {
  const [toggle, setToggle] = useState(false);

  const context = useContext(Context);

  useEffect(() => {
    // console.log(context);
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
        <ProductList>
          { context.products.map((p) => (
            <Product
              key={ p.id }
              imageURL={ p.imageURL }
              price={ p.price }
              title={ p.title }
              addProductToCart={ context.addProductToCart }
            >

            </Product>
          )) }
        </ProductList>
      </MainContainer>
    </>
  );
}

export default App;
