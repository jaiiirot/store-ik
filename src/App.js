// import logo from "./img/noaN.png";
import './style/App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/Navbar";

function App() {
  const logo = "IK";
  return (
    <div className="App">
      <Navbar logo={logo}/>
      <ItemListContainer greeting='Bienvenido'/>
    </div>
  );
}

export default App;
