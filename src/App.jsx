// import logo from "./img/noaN.png";
import "./style/App.css";
import Navbar from "./components/Navbar/Navbar";
// import BodyContainer from "./components/BodyContainer/BodyContainer";
import BodyContainer from "./components/BodyContainer/BodyContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyContainer />
      {/* <BodyContainer /> */}
    </div>
  );
}

export default App;
