// import Itemcount from "./ItemCount";
import productos from "../../../products/products.json";
// import { useState } from "react";
import ItemList from "./ItemList";
function ItemListContainer() {
/*   const [quantity, setQuantity] = useState(0);
  const incrementCart = (stock) => {
    if (quantity < stock) quantity++;
  }; */

  return (
    <div className="ItemListContainer">
      <h2>SWEATERS Y POLERAS</h2>
      <ItemList productos={productos}/>
    </div>
  );
}
export default ItemListContainer;
