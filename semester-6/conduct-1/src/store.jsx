// store.js
import { createStore } from "redux";

const initialState = {
  cart: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item, i) => i !== action.index)
      };

    default:
      return state;
  }
}

export const store = createStore(reducer);