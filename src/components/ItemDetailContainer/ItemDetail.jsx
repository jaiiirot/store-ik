// import vid from "../../asset/video/7efs.gif";
import { useContext, useEffect, useState } from "react";
import { DataProductosContext } from "../../context/DatosProductos";
import { useCount } from "../../hook/useCount";
// import { Dialog, DialogBody } from "@material-tailwind/react";

export default function ItemDetail({
  itemId,
  name,
  price,
  img,
  stock,
  description,
  idCategory,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [quantity, increment, decrement, resetCount] = useCount(0);
  const { AddItem } = useContext(DataProductosContext);

  const AddCardUser = (ID, QUANTITY) => {
    if (quantity <= 0 || quantity > stock) return resetCount();
    const item = { id: ID, img, name, price };
    AddItem(item, QUANTITY);
  };

  useEffect(() => {
    resetCount();
  }, [itemId]);

  return (
    <section className="relative text-gray-900  body-font h-max">
      <div className="container px-5 py-4 mx-auto">
        <div className="text-xs title-font text-gray-800 tracking-widest text-center">
          <h2 className="py-2">{name}</h2>
        </div>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-96 w-full mx-auto">
            <img
              alt="ecommerce"
              className="w-full lg:h-full h-full object-cover object-center rounded"
              src={img}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {name}
            </h1>
            <div className="flex mb-4">
              <span className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Descripcion
              </span>
            </div>
            <p className="leading-relaxed mb-4">{description}</p>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-black">Stock</span>
              <span className="ml-auto text-black">{stock}</span>
            </div>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-black">Categoria</span>
              <span className="ml-auto text-black">{idCategory}</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
              <span className="text-black">Cantidad</span>
              <div className="ml-auto flex items-center justify-center gap-2">
                <span
                  className="text-2xl w-9 select-none h-8 rounded-full bg-black text-white cursor-pointer text-center"
                  onClick={decrement}
                >
                  -
                </span>
                <span className="text-black w-4 text-center">{quantity}</span>
                <span
                  className="text-2xl select-none w-9 h-8 rounded-full bg-black text-white cursor-pointer text-center"
                  onClick={increment}
                >
                  +
                </span>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${price}
              </span>
              <span
                className="flex ml-auto cursor-pointer select-none text-white bg-[#151E31] border-0 py-2 px-6 focus:outline-none hover:bg-[#0b2a6c] rounded"
                onClick={() => {
                  handleOpen();
                  AddCardUser(itemId, quantity);
                }}
              >
                Agregar al Carrito
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*       <Dialog
        open={open}
        handler={handleOpen}
        className="relative bg-white m-4 rounded-lg shadow-2xl text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed md:w-1/6 lg:w-1/6 2xl:w-2/5 min-w-[25%] md:min-w-[25%] lg:min-w-[30%] 2xl:min-w-[30%] max-w-[30%] md:max-w-[35%] lg:max-w-[25%] 2xl:max-w-[40%] w-8"
      >
        <DialogBody className="flex items-center justify-center flex-col">
          <img src={vid} className="h-32" />
          <h2 className="text-xl">Se agrego corectamente</h2>
        </DialogBody>
      </Dialog> */}
    </section>
  );
}
