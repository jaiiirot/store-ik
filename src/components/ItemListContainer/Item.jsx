import { useState } from "react";
import { Link } from "react-router-dom";
function Item({ id, imagen, titulo, precio, initial, stock }) {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="Item normal-case text-black active:bg-pink-500/20">
        {/* <Link to={`/item/${(titulo).split(' ').join('-')}`}> */}
        <div className="Item__options">
          <span
            className="bg-[#000] hover:bg-white rounded-full hover:text-gray-900 text-white w-8 h-8 text-center leading-9"
            onClick={increment}
          >
            <i className="bx bxs-shopping-bags sm:text-xl"></i>
          </span>
          <span className="bg-[#000] hover:bg-white rounded-full hover:text-gray-900 text-white w-8 h-8 text-center leading-9">
            <i className="bx bxs-heart-circle sm:text-xl"></i>
          </span>
        </div>

        <Link to={`${id}/${titulo}`}>
          <div className="Item__img ">
            <img className="w-full" src={imagen} />
          </div>
          <div className="flex flex-col h-28 justify-around">
            <h4 className="text-xs lg:text-sm font-semibold text-start ">
              {titulo}
            </h4>
            <div className="flex gap-4 justify-around items-center">
              {/* <p className="text-sm">Stock: {stock}</p> */}
              <h4 className="text-sm font-medium">{precio}</h4>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Item;
