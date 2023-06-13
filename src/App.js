import logo from "./img/noaN.png";
import './style/App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar imgLogo={logo}/>
      <ItemListContainer greeting='Bienvenido'/>
    </div>
  );
}

export default App;
