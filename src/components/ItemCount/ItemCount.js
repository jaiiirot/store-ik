import { useState } from "react";

function ItemCount({ imagen, titulo, precio, initial, stock, onAdd }) {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <div className="ItemCount">
      <div className="ItemCount__img">
        <img src={imagen} />
      </div>
      <div className="ItemCount__informacion">
        <h2>{titulo}</h2>
        <h4>{precio}</h4>
      </div>
      <div className="ItemCount__boton">
        <div>
          <button className="btn-rojo" onClick={decrement}>
            -
          </button>
          <span>{quantity}</span>
          <button className="btn-verde" onClick={increment}>
            +
          </button>
        </div>
        <button
          className="btn-gris"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
export default ItemCount;
