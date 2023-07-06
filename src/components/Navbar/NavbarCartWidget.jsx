import {
  MagnifyingGlassCircleIcon,
  ShoppingBagIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
function CartWidget() {
  return (
    <div className="flex items-center">
      {/* Search */}
      <div className="lg:flex bg-white hidden hover:cursor-pointer rounded-3xl">
        <div className="group -m-2 flex items-center p-2 text-gray-900 hover:text-gray-800 ">
          <input
            type="text"
            placeholder="Buscar"
            className="outline-none p-1 rounded-3xl"
          />
          <MagnifyingGlassCircleIcon className="h-6 w-6 " aria-hidden="true" />
        </div>
      </div>

      {/* Heart */}
      <div className="ml-4 flow-root lg:ml-6">
        <div className="group -m-2 flex items-center p-2">
          <HeartIcon
            className="h-6 w-6 flex-shrink-0 text-gray-900 hover:text-gray-800 cursor-pointer"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-gray-900 hover:text-gray-800 cursor-pointer">
            0
          </span>
        </div>
      </div>

      {/* Cart */}
      <div className="ml-4 flow-root lg:ml-6">
        <div className="group -m-2 flex items-center p-2">
          <ShoppingBagIcon
            className="h-6 w-6 flex-shrink-0 text-gray-900 hover:text-gray-800 cursor-pointer"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-gray-900 hover:text-gray-800 cursor-pointer">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartWidget;
