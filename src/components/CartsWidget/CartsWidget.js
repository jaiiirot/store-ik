function CartsWidget({meGusta , carrito}) {
  return (
    <div className="header__icons">
      <a href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
        <i className="bx bxs-search"></i>
      </a>
      <a href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
        <i className="bx bxs-heart">
          <span>({meGusta})</span>
        </i>
      </a>
      <a href="https://img.avellanedaaltoque.com/productos/1543748/1jzo_thumb.jpg">
        <i className="bx bxs-shopping-bag">
          <span>({carrito})</span>
        </i>
      </a>
    </div>
  );
}
export default CartsWidget;
