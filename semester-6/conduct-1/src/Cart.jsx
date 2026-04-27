import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item, i) => (
        <div key={i}>
          {item.name} - ${item.price}
          <button onClick={() => dispatch({ type: "REMOVE", index: i })}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}