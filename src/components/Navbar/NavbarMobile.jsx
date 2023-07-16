import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function NavbarMobile({ open, setOpen, navigation, classNames }) {
  return (
    <>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[100] lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-[100] flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        {category.sections.map((section) => (
                          <details
                            className="group [&_summary::-webkit-details-marker]:hidden"
                            key={section.name}
                          >
                            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700">
                              <span className="-m-2 block p-2 font-medium text-gray-900">
                                {section.name}
                              </span>

                              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                              {section.items.map((item, i) => (
                                <Link
                                  key={i}
                                  to={`${item.name.split(" ").join("")}/`}
                                >
                                  <li className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900">
                                    <span className="-m-2 block p-2 text-gray-500">
                                      {item.name}
                                    </span>
                                  </li>
                                </Link>
                              ))}
                            </ul>
                          </details>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link to={`${page.id}/`}>
                        <span className="-m-2 block p-2 font-medium text-gray-900 text-xs">
                          {page.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default NavbarMobile;
