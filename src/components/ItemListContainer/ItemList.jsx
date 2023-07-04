import { useEffect, useState } from "react";
import Item from "./Item";
function ItemList({ catalogoProductos }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // console.log(catalogoProductos)
    setProduct(catalogoProductos.productos||catalogoProductos)
  }, [catalogoProductos]);

    // console.log(product)

  return (
    <>
      {product?.map((item) => {
        return (
          <Item
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
