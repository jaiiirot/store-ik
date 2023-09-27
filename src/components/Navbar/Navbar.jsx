import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItem } from "../../config/firebase";
import NavbarWidgets from "./NavbarWidgets";
import NavbarMobile from "./NavbarMobile";
import NavbarList from "./NavbarList";
import logo from "../../asset/image/ico/icon.png";

export default function Navbars() {
  const [listProd, setListProd] = useState([]);
  const [pages, setPages] = useState([]);
  const [open, setOpen] = useState(false);
  async function onSave() {
    const data_pages = await getItem("navegation", "pages");
    setPages(data_pages.pages);
    setListProd(data_pages.pages[0].items);
  }
  const OPEN_BAR = () => {
    setOpen(!open);
  };
  useEffect(() => {
    onSave();
  }, []);

  return (
    <>
      <header className="sticky my-navbar">
        <NavbarMobile pages={pages} open={open} />
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <span
                className="text-black text-[1.25rem] cursor-pointer sm:hidden"
                onClick={OPEN_BAR}
              >
                {open ? (
                  <i className="fa-solid fa-xmark"></i>
                ) : (
                  <i className="fa-solid fa-bars-staggered "></i>
                )}
              </span>
              <Link to={"/"} className="flex items-center">
                <img src={logo} alt="" className="h-[50px] hidden sm:block" />
                <h1 className="font-family-title text-4xl">IK</h1>
              </Link>
            </div>

            <ul className="my-navbar-list-items text-[1rem] gap-6 hidden sm:flex">
              {pages.map((pag, i) => {
                const { id } = pag;
                return (
                  <li key={i} className="cursor-pointer">
                    {id !== "Tienda" ? (
                      <Link to={`${id.toLowerCase()}`}>{id}</Link>
                    ) : (
                      <p onClick={OPEN_BAR}>{id}</p>
                    )}
                    <span></span>
                  </li>
                );
              })}
            </ul>

            <NavbarWidgets />
          </div>
        </nav>
        <NavbarList listProd={listProd} open={open} />
      </header>
    </>
  );
}
