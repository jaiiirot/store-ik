import { Outlet } from "react-router-dom";
import Navbars from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import CartMobile from "../CartMobile";
export default function Layout() {
  return (
    <>
      {/* <CartMobile /> */}
      <Navbars />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
