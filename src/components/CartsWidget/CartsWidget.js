function CartsWidget({ meGusta, carrito }) {
  return (
    <ul className="header__icons">
      <li href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
        <i className="bx bxs-search"></i>
      </li>
      <li href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
        <i className="bx bxs-heart"></i>
        <span className="header__icons--count">{meGusta}</span>
      </li>
      <li href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
        <i className="bx bxs-shopping-bag"></i>
        <span className="header__icons--count">{carrito}</span>
      </li>
    </ul>
  );
}
export default CartsWidget;
