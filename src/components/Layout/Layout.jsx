import { Outlet } from "react-router-dom";
import Navbars from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="relative">
      <Navbars />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
