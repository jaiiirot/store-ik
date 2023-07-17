import ItemCarrucelContainer from "../components/ItemCarrucelContainer/ItemCarrucelContainer";
import ItemSectionContainer from "../components/ItemSection/ItemSectionContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
export default function Home() {
  return (
    <div className="home">
      <div className="home__carrucel">
        <ItemCarrucelContainer />
      </div>
      <div className="home__main px-4 py-8 sm:px-6 lg:px-8">
        <div className="home__main-suno">
          <ItemSectionContainer />
        </div>
        <div className="home__main-product">
          <ItemListContainer quantity={6} isHome="todos/"/>
        </div>
      </div>
    </div>
  );
}
