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
              img={item.img}
              name={item.name}
              price={item.price}
              initial={0}
              stock={item.stock}
              description={item.description}
              idCategory={item.idCategory}
            />
          );
      })}
    </>
  );
}

export default ItemList;
