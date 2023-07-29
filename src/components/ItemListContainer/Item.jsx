import { Link } from "react-router-dom";
function Item({ isDetailUrl, id, img, name, price }) {
  return (
    <>
      <div className="Item normal-case text-black">
        <Link to={`${isDetailUrl || ""}${id}/${name}`}>
          <div className="Item__img ">
            <img className="w-full" src={img} />
          </div>
          <div className="flex flex-col h-28 justify-around">
            <div className="text-center">
              <h4 className="text-xs font-semibold ">{name}</h4>
            </div>
            <div className="flex gap-4 justify-around items-center">
              <h4 className="text-xs font-medium">${price}</h4>
            </div>
            <span className="text-xs py-2 px-4 bg-[#151E31] text-white">
              Ver Detalles...
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Item;
