import { HeartIcon } from "@heroicons/react/20/solid";

export default function ItemDetail({ nombre, precio, img, stock, id }) {
  console.log(nombre);
  return (
    <section className="text-gray-900  body-font h-max">
      <div className="container px-5 py-4 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <div className="text-sm title-font text-gray-800 tracking-widest flex justify-between">
              <h2>{nombre}</h2>
              <span>{id}</span>
            </div>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {nombre}
            </h1>
            <div className="flex mb-4">
              <span className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </span>
            </div>
            <p className="leading-relaxed mb-4">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam iligo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-black">Stock</span>
              <span className="ml-auto text-black">{stock}</span>
            </div>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-black">Size</span>
              <span className="ml-auto text-black">Medium</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
              <span className="text-black">Quantity</span>
              <span className="ml-auto text-black">4</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                {precio}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Comprar
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <HeartIcon className="h-6 text-white" />
              </button>
            </div>
          </div>
          <div className="lg:w-96 w-full mx-auto">
            <img
              alt="ecommerce"
              className="w-full lg:h-full h-full object-cover object-center rounded"
              src={img}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
