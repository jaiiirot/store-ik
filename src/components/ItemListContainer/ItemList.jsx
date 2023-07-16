import { useEffect, useState } from "react";
import Item from "./Item";
function ItemList({ catalogoProductos, count, isDetailUrl }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(catalogoProductos.productos || catalogoProductos);
  }, [catalogoProductos]);
  return (
    <>
      {product?.map((item, i) => {
        if (i < count)
          return (
            <Item
              isDetailUrl={isDetailUrl}
              key={item.id}
              id={item.id}
              imagen={item.img}
              titulo={item.nombre}
              precio={item.precio}
              initial={0}
              stock={item.stock}
            />
          );
      })}
    </>
  );
}

export default ItemList;
