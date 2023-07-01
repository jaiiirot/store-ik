import Item from "./Item";
function ItemList({ productos }) {
  return (
    <section className="ItemList">
      {productos.forEach((e) => {
        console.log(e.productos)
        // e.productos.map((element) => {
        //   return (
        //     <Item
        //       key={element.id}
        //       imagen={element.img}
        //       titulo={element.nombre}
        //       precio={element.precio}
        //       initial={0}
        //       stock={element.stock}
        //     />
        //   );
        // });
      })}
    </section>
  );
}

export default ItemList;
