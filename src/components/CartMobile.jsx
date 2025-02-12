export default function CartMobile() {
  return (
    <>
      <div className="absolute top-0  z-30 bg-[#00000086] h-full w-full"></div>
      <aside className="fixed right-0 top-0 bottom-0 bg-white shadow-lg w-96 z-50">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Carrito</h3>
            <button className="p-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.333 9.334h13.334V7.11H1.333v2.223z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>

          <div className="mb-6">
            <div className="bg-gray-200 h-2 rounded-full">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "94.12%" }}
              ></div>
            </div>
            <p className="text-sm mt-2">
              Te faltan <span className="font-bold">$15.001</span> para tener{" "}
              <span className="font-bold">Envío Gratis</span>
            </p>
          </div>

          <div className="overflow-y-auto h-96">
            <div className="flex items-center mb-4">
              <img
                src="https://nikearprod.vtexassets.com/arquivos/ids/845929-96-auto"
                alt="Nike V2K Run"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="ml-4 flex-1">
                <h4 className="font-semibold">Nike V2K Run</h4>
                <p className="text-sm text-gray-600">Talle: 6 Color: Blanco</p>
                <div className="flex items-center mt-2">
                  <button className="p-2 border rounded-l">-</button>
                  <input
                    type="text"
                    value="1"
                    className="w-12 text-center border-t border-b"
                    disabled
                  />
                  <button className="p-2 border rounded-r">+</button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">$239.999</p>
                <button className="text-sm text-gray-500">Eliminar</button>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <img
                src="https://nikearprod.vtexassets.com/arquivos/ids/865972-80-80"
                alt="Nike Flex"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="ml-4 flex-1">
                <h4 className="font-semibold">Nike Flex</h4>
                <p className="text-sm text-gray-600">Talle: Único</p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Agregar
                </button>
              </div>
              <div className="text-right">
                <p className="font-semibold">$31.999</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <p>Subtotal</p>
              <p className="font-semibold">$239.999</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p>Descuentos</p>
              <p className="font-semibold">$0</p>
            </div>
            <div className="flex justify-between items-center mb-6">
              <p className="font-bold">Total</p>
              <p className="font-bold">$239.999</p>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg mb-4">
              Iniciar compra
            </button>
            <button className="w-full border border-gray-300 py-3 rounded-lg">
              Seguir comprando
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
