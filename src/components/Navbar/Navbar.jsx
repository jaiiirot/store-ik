import { Link } from "react-router-dom";
import NavbarWidgets from "./NavbarWidgets";
import logo from "../../asset/image/ico/icon.png";

export default function Navbars() {
  return (
    <>
      <header className="sticky my-navbar bg-slate-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <ul className="my-navbar-list-items gap-6 text-sm flex justify-center items-center">
            <li className="cursor-pointer">
              <Link to="/">MAYORISTA</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/">INICIO</Link>
            </li>
            <li>
              {" "}
              <Link to={"/"} className="flex items-center">
                <img src={logo} alt="" className="h-[25px] hidden sm:block" />
                <h1 className="font-family-title">IK</h1>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/productos">TIENDA</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/nosotros">CARRITO</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/contacto">CONTACTO</Link>
            </li>
          </ul>
          <NavbarWidgets />
        </nav>
      </header>
    </>
  );
}
