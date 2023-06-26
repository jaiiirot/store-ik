import CartsWidget from "./CartsWidget";
import OptionsWidget from "./OptionsWidget";
function Navbar() {
  return (
    <div className="header">
      <OptionsWidget/>
      <div className="header__logo">
        <a href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
          <h1>IK</h1>
        </a>
      </div>
      <CartsWidget meGusta={3} carrito={4} />
    </div>
  );
}
export default Navbar;
