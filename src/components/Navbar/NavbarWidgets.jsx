import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataCart } from "../../context/ContextCart";

function CartWidget() {
  const { card } = useContext(DataCart);
  return (
    <ul className="flex items-center justify-center gap-4">
      <li className="flex items-center cursor-pointer">
        <Link to={"likes/"}>
          <i className="fa-solid fa-heart" style={{ color: "#ff0000" }}></i>
        </Link>
      </li>
      <li className="relative flex items-center cursor-pointer ">
        <Link to={"cart/"}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="absolute -top-[0.35rem] -right-[0.35rem] text-sm rounded-full bg-white h-[0.875rem] overflow-hidden">
            {card.reduce((a, b) => a + b.quantity, 0)}
          </span>
        </Link>
      </li>
      <li>
        <Link to={`/`}>
          <i className="fa-solid fa-user"></i>
        </Link>
      </li>
    </ul>
  );
}

export default CartWidget;
