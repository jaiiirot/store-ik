// import ItemCarrucelContainer from "../components/ItemCarrucelContainer/ItemCarrucelContainer";
import ItemSectionContainer from "../components/ItemSection/ItemSectionContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
export default function Home() {
  return (
    <div className="home">
      <div className="home__carrucel">
        <span></span>
      </div>
      <div className="home__main px-4 py-8 sm:px-6 lg:px-8">
        <div className="home__main-suno">
          <ItemSectionContainer />
        </div>
        <div className="home__main-product mt-8 text-center">
          <h2 className="font-family-title text-2xl md:text-3xl">
            TODOS NUESTROS PRODUCTOS
          </h2>
          <ItemListContainer quantity={6} isHome />
        </div>
      </div>
    </div>
  );
}
