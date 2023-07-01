import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function CartWidget() {
  return (
    <div className="flex max-md:ml-auto items-center">
      {/* Search */}
      <div className="flex max-md:hidden bg-white">
        <div className="group -m-2 flex items-center p-2 text-gray-400 hover:text-gray-500">
          <input type="text" placeholder="Buscar" className="outline-none p-1"/>
          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>

      {/* Heart */}
      <div className="ml-4 flow-root lg:ml-6">
        <div className="group -m-2 flex items-center p-2">
          <HeartIcon
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            0
          </span>
        </div>
      </div>

      {/* Cart */}
      <div className="ml-4 flow-root lg:ml-6">
        <div className="group -m-2 flex items-center p-2">
          <ShoppingBagIcon
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartWidget;
