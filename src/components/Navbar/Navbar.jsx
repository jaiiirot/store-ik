import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import CartWidget from "./CartWidget";
import NavbarMobile from "./NavbarMobile";
import OptionWidget from "./OptionWidget";
import { Link } from "react-router-dom";

const navigation = {
  categories: [
    {
      id: "Mujer",
      name: "Mujer",
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
       /*  {
          id: "accesorios",
          name: "Accesorios",
          items: [{ name: "Relojes" }, { name: "Carteras" }],
        },
        {
          id: "marcas",
          name: "Marcas",
          items: [{ name: "Nelson completo" }, { name: "A mi manera" }],
        }, */
      ],
    },
    /* {
      id: "Hombre",
      name: "Hombre",
      sections: [
        {
          id: "ropa",
          name: "Ropa",
          items: [
            { name: "Pantalones" },
            { name: "Suéteres" },
            { name: "Camisetas" },
          ],
        },
        {
          id: "accesorios",
          name: "Accesorios",
          items: [
            { name: "Relojes" },
            { name: "Gafas de sol" },
            { name: "Sombreros" },
          ],
        },
        {
          id: "marcas",
          name: "Marcas",
          items: [
            { name: "Reorganizado" },
            { name: "Falsificación" },
            { name: "Nelson completo" },
          ],
        },
      ],
    }, */
  ],
  pages: [
    // { name: "Novedades"},
    { name: "Compania" },
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
        <p className="flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          obten un 30% de descuento
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Flyout menus */}
              <OptionWidget
                open={open}
                classNames={classNames}
                setOpen={setOpen}
                navigation={navigation}
              />

              {/* Logo */}
              <div className="flex lg:ml-0">
                <Link to={"/"}>
                  <span className="sr-only">Indumentaria Kevin</span>
                  <h1 className="font-family-title text-5xl">IK</h1>
                </Link>
              </div>

              <CartWidget />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
