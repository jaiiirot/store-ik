import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import CartWidget from "./NavbarCartWidget";
import NavbarMobile from "./NavbarMobile";
import NavbarOptionWidget from "./NavbarOptionWidget";
import { Link } from "react-router-dom";

const navigation = {
  categories: [
    {
      id: "productos",
      name: "PRODUCTOS",
      sections: [
        {
          id: "ropa",
          name: "Ropa",
          items: [
            { name: "todos" },
            { name: "camperas y parkas" },
            { name: "sweaters y poleras" },
            { name: "buzos" },
            { name: "monos y vestidos" },
          ],
        },
      ],
    },
  ],
  pages: [
    { id: "contacto", name: "CONTACTO" },
    { id: "politica-de-devolucion", name: "POLITICA DE DEVOLUCIÓN" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbars() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavbarMobile
        open={open}
        classNames={classNames}
        setOpen={setOpen}
        navigation={navigation}
      />

      <header className="sticky my-navbar z-[100]">
        <p className="flex h-6 items-center justify-center bg-[#151e31] px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          obten un 30% de descuento
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200 flex flex-col">
            <div className="flex h-16 items-center justify-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="flex lg:ml-0">
                <Link to={"/storeik/"}>
                  <span className="sr-only">Indumentaria Kevin</span>
                  <h1 className="font-family-title text-5xl">IK</h1>
                </Link>
              </div>
              {/* Flyout menus */}
              <NavbarOptionWidget
                open={open}
                classNames={classNames}
                setOpen={setOpen}
                navigation={navigation}
              />
              <CartWidget />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
