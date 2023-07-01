import { catalogue } from "../../asset/catalogue/catalogue";
import ItemList from "./ItemList";
function ItemListContainer() {
  /*   const [quantity, setQuantity] = useState(0);
  const incrementCart = (stock) => {
    if (quantity < stock) quantity++;
  }; */

  return (
    <div className="ItemListContainer">
      <h2>SWEATERS Y POLERAS</h2>
      <ItemList productos={catalogue} />
    </div>
  );
}
export default ItemListContainer;
