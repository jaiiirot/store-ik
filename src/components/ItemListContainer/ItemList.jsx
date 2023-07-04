import Item from "./Item";
function ItemList({ productos }) {
  return (
    <>
      {productos.map((item) => {
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
