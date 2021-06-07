import React from "react";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Icon, CartCount, CartSideBar } from './Styles';

export default function Cart() {
  return <>
    <Wrapper>
        <Icon icon={faShoppingCart} />
        <CartCount>0</CartCount>
    </Wrapper>
  </>;
}
