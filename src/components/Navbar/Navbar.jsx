import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import CartWidget from "./NavbarCartWidget";
import NavbarMobile from "./NavbarMobile";
import NavbarOptionWidget from "./NavbarOptionWidget";
import { Link } from "react-router-dom";
import { navigation } from "../../asset/constant/navegation.js";
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

        <p className="flex h-6 items-center justify-center bg-[#151e31] px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          obten un 30% de descuento
        </p>
      <header className="sticky my-navbar z-[100]">

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200 flex flex-col">
            <div className="flex h-16 items-center justify-between">
              <button
                type="button"
                className="rounded-md bg-transparent p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6 text-gray-900" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link to={"/store-ik/"}>
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
