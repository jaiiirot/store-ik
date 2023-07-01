import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCarrucelContainer from "./components/ItemCarrucelContainer/ItemCarrucelContainer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="my-BodyContainer">
        <ItemCarrucelContainer />
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
