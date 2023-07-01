import ItemListContainer from "./ItemListContainer/ItemListContainer";
import CarrucelContainer from "./ItemSliderContainer/CarrucelContainer";

function BodyContainer() {
  return (
    <section className="BodyContainer">
      <CarrucelContainer/>
      <ItemListContainer />
    </section>
  );
}

export default BodyContainer;
 