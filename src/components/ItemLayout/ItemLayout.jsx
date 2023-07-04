import { Outlet } from "react-router-dom";
import Navbars from "../Navbar/Navbar";

export default function ItemLayout() {
  return (
    <>
      <Navbars />
      <Outlet />
    </>
  );
}
