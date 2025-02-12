import { useContext } from "react";
import { DataCart } from "../../context/ContextCart";

function CartWidget() {
  const { card } = useContext(DataCart);
  return (
    <ul className="flex items-center justify-center gap-4">
      <li className="flex items-center gap-4 hover:opacity-80">
        <span className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
            strokeWidth="2"
          >
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </span>
      </li>
      <li className="relative flex items-center cursor-pointer hover:opacity-80">
        <span className="flex items-center cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
            strokeWidth="2"
          >
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 17h-11v-14h-2"></path>
            <path d="M6 5l14 1l-1 7h-13"></path>
          </svg>
          <p>{card.reduce((a, b) => a + b.quantity, 0)} / $0.00</p>
        </span>
      </li>
    </ul>
  );
}

export default CartWidget;
