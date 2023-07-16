import { Link } from "react-router-dom";

function ItemSection() {
  return (
    <section>
      <div className="w-full ">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative lg:w-full">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src="https://images.pexels.com/photos/6457570/pexels-photo-6457570.jpeg?auto=compress&cs=tinysrgb"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            {/* <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span> */}

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Indumentaria Kevin
              </h2>

              <p className="mt-4 text-gray-600">
                Adéntrate en un mundo donde el estilo se convierte en un
                lenguaje sin palabras, donde cada prenda es más que una simple
                pieza de tela. En nuestras colecciones, descubrirás el poder de
                expresarte a través de la moda, donde cada elección se convierte
                en un lienzo en blanco para contar tu historia única.
              </p>

              <Link to={`todos`} className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                Productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemSection;
