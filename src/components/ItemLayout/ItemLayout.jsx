import { Outlet } from "react-router-dom";
import Navbars from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function ItemLayout() {
  return (
    <div className="relative">
      <Navbars />
      <Outlet />
      <Footer />
    </div>
  );
}
