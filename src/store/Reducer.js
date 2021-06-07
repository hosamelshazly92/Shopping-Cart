import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./types";

const addProductToCart = (state, product) => {
  const copy = [...state.carts];
  const curItemIndex = copy.findIndex((i) => i.product.id === product.id);

  if (curItemIndex < 0) {
    copy.push({ product, quantity: 1 });
  } else {
    const copyItem = { ...copy[curItemIndex] };
    copyItem.quantity++;
    copy[curItemIndex] = copyItem;
  }

  return { ...state, carts: copy };
};

const removeProductFromCart = (state, productID) => {
  const copy = [...state.carts];
  const curItemIndex = copy.findIndex((i) => i.product.id === productID);

  const curItem = { ...copy[curItemIndex] };
  curItem.quantity--;

  if (curItem.quantity <= 0) {
    copy.splice(curItemIndex, 1);
  } else {
    copy[curItemIndex] = curItem;
  }

  return { ...state, carts: copy };
};

const clearCart = (state) => {
  return {
    ...state,
    carts: []
  };
};

const switchFunction = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addProductToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return removeProductFromCart(state, action.payload);
    case CLEAR_ALL_FROM_CART:
      return clearCart(state);
    default:
      return state;
  }
};

export default switchFunction;
