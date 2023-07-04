import Item from "./Item";
function ItemList({ catalogoProductos }) {
  console.log(catalogoProductos)
  return (
    <>
      {catalogoProductos.map((item) => {
          return <Item
            key={item.id}
            id={item.id}
            imagen={item.img}
            titulo={item.nombre}
            precio={item.precio}
            initial={0}
            stock={item.stock}
            onAdd={(quantity, titulo) => {
              console.log(
                "cantidad agregada " + quantity + " del producto: " + titulo
              );
            }}
          />
      })}
    </>
  );
}

export default ItemList;
