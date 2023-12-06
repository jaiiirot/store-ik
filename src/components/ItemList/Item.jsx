import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Item({ catalogoProductos, count, category }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(catalogoProductos.productos || catalogoProductos);
  }, [catalogoProductos]);

  return (
    <>
      {product?.map((item, i) => {
        const { id, img, name, price } = item;
        if (i < count)
          return (
            <div key={id} className="Item normal-case text-black">
              <Link to={`${category}${id}/${name}`}>
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
          );
      })}
    </>
  );
}

export default Item;
