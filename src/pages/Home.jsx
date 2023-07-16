import ItemCarrucelContainer from "../components/ItemCarrucelContainer/ItemCarrucelContainer";
import ItemComment from "../components/ItemComment/ItemComment";
import ItemSection from "../components/ItemSection/ItemSection";
export default function Home() {
  return (
    <div className="home">
      <div className="home__carrucel">
        <ItemCarrucelContainer />
      </div>
      <div className="home__main px-4 py-16 sm:px-6 lg:px-8">
        <div className="home__main-suno">
          <ItemSection />
        </div>
        <div className="home__main-coment">
          <ItemComment />
        </div>
      </div>
    </div>
  );
}
