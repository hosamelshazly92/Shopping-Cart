import React, { useRef } from "react";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Icon, CartCount, CartSideBar, EmptyCart } from './Styles';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function Cart({ toggle, setToggle }) {
    const $sideBarRef = useRef();

    useOnClickOutside($sideBarRef, () => setToggle(false));

  return <>
    <Wrapper onClick={ () => setToggle(true) }>
        <Icon icon={faShoppingCart} />
        <CartCount>0</CartCount>
    </Wrapper>

    <CartSideBar ref={ $sideBarRef } className={ toggle ? 'expand' : 'shrink' }>
        <EmptyCart>Empty Cart</EmptyCart>
    </CartSideBar>
  </>;
}
