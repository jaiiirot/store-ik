// import Card from '../Card/Card';
import Card from "../Card/card";
function ItemListContainer({ greeting }) {
  return (
    <div className="ItemListContainer">
      <h1>{greeting}</h1>
      <section className="ItemListContainer__cards">
        <Card
          imagen="https://bellkys.com.ar/wp-content/uploads/2023/05/DSC07813.jpeg"
          titulo="Campera Long"
          precio="$10000"
        />
        <Card
          imagen="https://bellkys.com.ar/wp-content/uploads/2023/04/DSC02521.jpeg"
          titulo="Campera Long"
          precio="$10000"
        />
        <Card
          imagen="https://bellkys.com.ar/wp-content/uploads/2023/04/louis-3.jpeg"
          titulo="Campera Long"
          precio="$10000"
        />
        <Card
          imagen="https://bellkys.com.ar/wp-content/uploads/2023/03/clara6.jpeg"
          titulo="Campera Long"
          precio="$10000"
        />
        <Card
          imagen="https://bellkys.com.ar/wp-content/uploads/2023/05/sid-4.jpeg"
          titulo="Campera Long"
          precio="$10000"
        />
        <Card
          imagen="https://bellkys.com.ar/wp-content/uploads/2023/03/gemini2.jpeg"
          titulo="Campera Long"
          precio="$10000"
        />
        <Card
          imagen="https://bellkys.com.ar/wp-content/uploads/2023/05/DSC07813.jpeg"
          titulo="Campera Long"
          precio="$10000"
        />
      </section>
    </div>
  );
}
export default ItemListContainer;
