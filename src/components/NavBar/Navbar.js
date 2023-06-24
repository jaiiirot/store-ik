import CartsWidget from "../CartsWidget/CartsWidget";
function Navbar({ logo }) {
  return (
    <div className="header">
      <ul className="header__navbar">
        <li>
          <a href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
            ¡ Novedades !
          </a>
        </li>
        <li>
          <a href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
            Tienda
          </a>
        </li>
        <li>
          <a href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
            Mujer
          </a>
        </li>
        <li>
          <a href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
            Hombre
          </a>
        </li>
      </ul>
      <div className="header__logo">
        <a href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
          <h1>{logo}</h1>
        </a>
      </div>
      <CartsWidget meGusta={3} carrito={4} />
    </div>
  );
}
export default Navbar;
