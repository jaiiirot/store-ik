function CartsWidget({ meGusta, carrito }) {
  return (
    <ul className="header__icons">
      <li style={{height: "100%", background: "#fff", borderRadius: "25px",padding: "4px 6px"}}>
        <form style={{display:"flex",justifyContent: "center",}}>
          <input style={{padding: "4px 6px", height: "100%", border: "none", outline: "none"}} type="text" placeholder="Buscar"/>
          <i className="bx bxs-search"></i>
        </form>
      </li>
      <li>
        <i className="bx bxs-heart"></i>
        <span className="header__icons--count">{meGusta}</span>
      </li>
      <li>
        <i className="bx bxs-shopping-bag"></i>
        <span className="header__icons--count">{carrito}</span>
      </li>
    </ul>
  );
}
export default CartsWidget;
