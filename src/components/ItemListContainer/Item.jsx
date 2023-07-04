import { IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Item({id, imagen, titulo, precio, initial, stock }) {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="Item normal-case text-black active:bg-pink-500/20">
        {/* <Link to={`/item/${(titulo).split(' ').join('-')}`}> */}
          <div className="Item__options">
            <IconButton
              className="bg-[#000] hover:bg-[#787878] rounded-full"
              onClick={increment}
            >
              <i className="bx bxs-shopping-bags sm:text-xl"></i>
            </IconButton>
            <IconButton className="bg-[#000] hover:bg-[#787878] rounded-full">
              <i className="bx bxs-heart-circle sm:text-xl"></i>
            </IconButton>
          </div>

        <Link to={`/producto/${id}/${titulo}`} >
          <div className="Item__img ">
            <img className="w-full" src={imagen} />
          </div>
          <div className="flex flex-col h-28 justify-around">
            <h4 className="text-sm font-semibold text-start ">{titulo}</h4>
            <div className="flex gap-4 justify-around items-center">
              <p className="text-sm">Stock: {stock}</p>
              <span>{quantity}</span>
              <h4 className="text-sm font-medium">{precio}</h4>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Item;
