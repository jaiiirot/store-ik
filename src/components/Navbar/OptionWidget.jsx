import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { NavLink , Link} from "react-router-dom";
function OptionWidget({ navigation, classNames }) {
  return (
    <>
      {/* Flyout menus */}
      <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
        <div className="flex h-full space-x-8">
          {navigation.categories.map((category) => {
            return (
              <Popover key={category.name} className="flex">
                {({ open }) => (
                  <>
                    <div className="relative flex">
                      <Popover.Button
                        className={classNames(
                          open
                            ? "border-indigo-800 text-gray-900"
                            : "border-transparent text-gray-900 hover:text-gray-800",
                          "relative z -10 -mb-px flex items-center border-b-2 pt-px text-lg font-medium transition-colors duration-200 ease-out"
                        )}
                      >
                        {category.name}
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
                              {category.sections.map((section) => {
                                return (
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
                                              to={`/categoria/${(item.name).split(' ').join('')}/`}
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
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            );
          })}

          {navigation.pages.map((page) => (
            <span
              key={page.name}
              className={`flex items-center text-lg font-medium text-gray-900 hover:text-gray-800 my-navbar--page`}
            >
              {page.name}
            </span>
          ))}
        </div>
      </Popover.Group>
    </>
  );
}

export default OptionWidget;
