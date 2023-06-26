// import logo from "./img/noaN.png";
import './style/App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const logo = "IK";
  return (
    <div className="App">
      <Navbar logo={logo}/>
      <ItemListContainer />
    </div>
  );
}

export default App;
