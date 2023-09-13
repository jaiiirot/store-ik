import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataProductosContext } from "../../context/DatosProductos";

function CartWidget() {
  const { card } = useContext(DataProductosContext);
  return (
    <div className="flex items-center">
      {/* Cart */}
      <div className="ml-4 flow-root lg:ml-6">
        <Link to={"card/"}>
          <div className="group -m-2 flex items-center p-2">
            <i class="fa-solid fa-cart-shopping h-4 w-4 md:h-6 md:w-6 flex-shrink-0 text-gray-900 hover:text-gray-800 cursor-pointer"></i>
            <span className="ml-2 text-sm font-medium text-gray-900 hover:text-gray-800 cursor-pointer">
              {card.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CartWidget;
