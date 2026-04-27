// ProductList.js
import { useDispatch } from "react-redux";

const products = [
  { id: 1, name: "Phone", price: 100 },
  { id: 2, name: "Laptop", price: 500 }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ${p.price}
          <button onClick={() => dispatch({ type: "ADD", payload: p })}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
}