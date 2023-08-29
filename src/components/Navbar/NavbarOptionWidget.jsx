// import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItem } from "../../config/firebase";

export default function NavbarOptionWidget({ classNames, open, setOpen }) {
  const [pages, setPages] = useState([]);
  const [product, setProduct] = useState([]);

  function onNavOptions() {
    getItem("navegation", "pages").then((e) => {
      setPages(e.pages);
    });
    getItem("navegation", "productos").then((e) => {
      setProduct(e.sections);
    });
  }
  useEffect(() => {
    onNavOptions();
  }, []);

  return (
    <>
      {/*       <div className="">
        <Popover.Group className="hidden lg:block lg:self-stretch md:h-12 w-max">
          <div className="flex h-full space-x-8">
            <Popover className="flex">
              {({ open }) => (
                <>
                  <div className="relative flex">
                    <Popover.Button
                      className={classNames(
                        open
                          ? "border-indigo-800 text-gray-900"
                          : "border-transparent text-gray-900 hover:text-gray-800",
                        "relative z -10 -mb-px flex items-center border-b-2 pt-px text-xs font-medium transition-colors duration-200 ease-out"
                      )}
                    >
                      PRODUCTOS
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                      <div
                        className="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                      />

                      <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-8 py-8">
                          <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                            {product?.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${section.name}-heading`}
                                  className="font-bold text-gray-900"
                                >
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${section.name}-heading`}
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  {section.items.map((item) => {
                                    return (
                                      <li key={item.name} className="flex">
                                        <Link
                                          to={`${item.name
                                            .split(" ")
                                            .join("-")}/`}
                                        >
                                          <span className="hover:text-gray-900 my-navbar--items text-gray-700">
                                            {item.name}
                                          </span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {pages?.map((page) => (
              <span
                key={page.id}
                className={`flex items-center my-navbar--page`}
              >
                <Link
                  to={`${page.id}/`}
                  className="text-xs font-medium text-gray-900 hover:text-gray-100"
                >
                  {page.name}
                </Link>
              </span>
            ))}
          </div>
        </Popover.Group>
      </div> */}
    </>
  );
}
