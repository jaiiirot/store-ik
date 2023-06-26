import Itemcount from "../ItemCount/ItemCount";
import productos from "../../../products/products.json";
function ItemListContainer() {
  return (
    <div className="ItemListContainer">
      <section className="ItemListContainer__cards">
        {productos.map((e, i) => {
          if (i < 13) {
            return (
              <Itemcount
                key={e.id}
                imagen={e.img}
                titulo={e.nombre}
                precio={e.precio}
              />
            );
          }
        })}
      </section>
    </div>
  );
}
export default ItemListContainer;
