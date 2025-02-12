import { Link } from "react-router-dom";
import NavbarWidgets from "./NavbarWidgets";

export default function Navbars() {
  return (
    <>
      <header className="my-navbar bg-[#951a11] text-white">
        <nav className="mx-auto w-10/12 flex items-center py-4 justify-between">
          <ul className="my-navbar-list-items gap-6 text-xs font-semibold flex justify-center items-center">
            <li>
              <Link to="/" className="flex items-center">
                <img src="/logo.svg" alt="" className="h-8" />
                <h1 className="font-family-title text-2xl">IK</h1>
              </Link>
            </li>
            <li className="cursor-pointer hover:opacity-80">
              <Link to="/">INICIO</Link>
            </li>
            <li className="cursor-pointer hover:opacity-80">
              <Link to="/mayorista">MAYORISTAS</Link>
            </li>
            <li className="cursor-pointer hover:opacity-80">
              <Link to="/tienda">TIENDA</Link>
            </li>
            <li className="cursor-pointer hover:opacity-80">
              <Link to="/carrito">CARRITO</Link>
            </li>
            <li className="cursor-pointer hover:opacity-80">
              <Link to="/contacto">CONTACTO</Link>
            </li>
          </ul>
          <NavbarWidgets />
        </nav>
      </header>
    </>
  );
}
