// App.js
import { Provider } from "react-redux";
import { store } from "./store";
import { CartProvider } from "./CartContext";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <h1>Shopping Cart</h1>
        <ProductList />
        <Cart />
      </CartProvider>
    </Provider>
  );
}

export default App;