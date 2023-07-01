import Item from "./Item";
function ItemList({productos}) {
  return (
    <section className="ItemList">
      {productos.map((e, i) => {
        if (i < 9) {
          return (
            <Item
              key={e.id}
              imagen={e.img}
              titulo={e.nombre}
              precio={e.precio}
              initial={0}
              stock={e.stock}
            />
          );
        }
      })}
    </section>
  );
}

export default ItemList;
