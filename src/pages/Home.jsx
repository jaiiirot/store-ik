// import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import ItemCarrucelContainer from "../components/ItemCarrucelContainer/ItemCarrucelContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemSection from "../components/ItemSection/ItemSection";
// import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div className="App">
      <div>
        <ItemCarrucelContainer />
        <ItemSection />
        <ItemListContainer />
      </div>
    </div>
  );
}
