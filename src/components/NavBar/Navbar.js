import CartsWidget from '../CartsWidget/CartsWidget';
function Navbar({ imgLogo }) {
  return (
    <div className="header">
      <ul className="navbar header__navbar">
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
      </ul>
      <div className="header__logo">
        <a href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
          <img src={imgLogo} />
        </a>
      </div>
      <CartsWidget meGusta={3} carrito={4}/>
    </div>
  )
}
export default Navbar;
