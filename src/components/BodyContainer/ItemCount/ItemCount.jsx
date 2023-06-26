import { useState } from "react";

function ItemCount({ imagen, titulo, precio, initial, stock, onAdd }) {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };
  // const decrement = () => {
  //   if (quantity > 1) setQuantity(quantity - 1);
  // };
  return (
    <div className="ItemCount">
      <span className="ItemCount__options">
        <button className="btn-verde" onClick={increment}>
          <i className="bx bxs-shopping-bags"></i>
        </button>
        <button className="btn-verde" onClick={increment}>
          <i className="bx bxs-heart-circle"></i>
        </button>
        <button className="btn-verde" onClick={increment}>
          <i className="bx bxs-bullseye"></i>
        </button>
      </span>
      <div className="ItemCount__img">
        <img src={imagen} />
      </div>
      <div className="ItemCount__informacion">
        <h4>{titulo}</h4>
        <p>{precio}</p>
      </div>
    </div>
  );
}
export default ItemCount;
