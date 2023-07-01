function Item({ imagen, titulo, precio, initial, stock, incrementCart }) {
  return (
    <div className="Item">
      <span className="Item__options">
        <button
          title="Agregar al Carrito"
          className="btn-verde" /* onClick={increment} */
        >
          <i className="bx bxs-shopping-bags"></i>
        </button>
        <button
          title="Me gusta"
          className="btn-verde" /* onClick={increment} */
        >
          <i className="bx bxs-heart-circle"></i>
        </button>
        <button title="Ver detalles" className="btn-verde">
          <i className="bx bxs-bullseye"></i>
        </button>
      </span>
      <div className="Item__img">
        <img src={imagen} />
      </div>
      <div className="Item__informacion">
        <h4>{titulo}</h4>
        <p>Stock disponible: {stock}</p>
        <h4>{precio}</h4>
      </div>
    </div>
  );
}

export default Item;
