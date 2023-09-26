import { Link, useParams } from "react-router-dom";
import ItemProgress from "./ItemProgress";
import { useContext, useEffect, useState } from "react";
import { DataCart } from "../../context/ContextCart";

export default function ItemCheckoutContainer() {
  const { saveInformation, setFinished } = useContext(DataCart);
  const { idUsuario } = useParams();
  const [formComplete, setFormComplete] = useState(false);
  const [formState, setFormState] = useState({});
  const onSubmitForm = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // AGREGAR ITEMS
    setFormComplete(Object.entries(formState).length === 7);
    setFinished({ ...formState });
  }, [formState]);

  return (
    <>
      <div className="px-4 lg:px-20 py-5">
        <ItemProgress progress={"w-1/2"} pago="" />
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 mb-4">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Resumen del pedido</p>
          <p className="text-gray-400">
            Revisa tus artículos. Y seleccione un método de envío adecuado.
          </p>
          {saveInformation.state ? (
            <ul className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              {saveInformation?.product.map((prod) => {
                return (
                  <li
                    key={prod.id}
                    className="flex flex-col rounded-lg bg-white sm:flex-row"
                  >
                    <img
                      className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                      src={prod.img}
                      alt=""
                    />
                    <div className="flex w-full flex-col px-4 py-4">
                      <span className="font-semibold">{prod.name}</span>
                      <p className="text-lg font-bold">
                        ${`${prod.price.toLocaleString()} x ${prod.quantity}`}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <h3 className="text-3xl bg-black text-white text-center">
              No podes finalizar compra por que no hay productos
            </h3>
          )}
        </div>

        <form
          className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0"
          onSubmit={onSubmit}
        >
          <p className="text-xl font-medium">Detalles del pago</p>
          <p className="text-gray-400">
            Complete su pedido proporcionando sus datos de pago.
          </p>
          {saveInformation.state ? (
            <>
              <div className="">
                <label
                  htmlFor="email"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Correo electrónico
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="your.email@gmail.com"
                    required
                    onChange={onSubmitForm}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    @
                  </div>
                </div>
                <label
                  htmlFor="card-holder"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Titular de la tarjeta
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="card-holder"
                    name="card-holder"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Nombre del titular de la tarjeta"
                    required
                    onChange={onSubmitForm}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    =
                  </div>
                </div>
                <label
                  htmlFor="card-no"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Detalles de tarjeta
                </label>
                <div className="flex">
                  <div className="relative w-7/12 flex-shrink-0">
                    <input
                      type="text"
                      id="card-no"
                      name="card-no"
                      className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      maxLength="16"
                      minLength="16"
                      required
                      onChange={onSubmitForm}
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      O
                    </div>
                  </div>
                  <input
                    type="date"
                    name="credit-expiry"
                    className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="MM/YY"
                    maxLength="5"
                    minLength="5"
                    required
                    onChange={onSubmitForm}
                  />
                  <input
                    type="text"
                    name="credit-cvc"
                    className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="CVC"
                    maxLength="4"
                    minLength="3"
                    required
                    onChange={onSubmitForm}
                  />
                </div>
                <label
                  htmlFor="billing-address"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Dirección de Envio
                </label>
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex-shrink-0 sm:w-7/12">
                    <input
                      type="text"
                      id="billing-address"
                      name="billing-address"
                      className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Direccion"
                      required
                      onChange={onSubmitForm}
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <img
                        className="h-4 w-4 object-contain"
                        src="https://img2.freepng.es/20180516/kwq/kisspng-flag-of-argentina-emojipedia-bandera-santiago-del-5afc5551d4ccc3.2860814015264863538716.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <select
                    type="text"
                    name="billing-state"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="State">Estado</option>
                  </select>
                  <input
                    type="text"
                    name="billing-zip"
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="ZIP"
                    required
                    onChange={onSubmitForm}
                  />
                </div>

                <div className="text-blank">
                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Subtotal</p>
                      <p className="font-semibold">${saveInformation?.total}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium ">Envío</p>
                      <p className="font-semibold">$800</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium ">Total</p>
                    <p className="text-2xl font-semibold ">
                      ${saveInformation?.total + 800}
                    </p>
                  </div>
                </div>
              </div>
              {formComplete ? (
                <Link to={`../${idUsuario}/finished/`}>
                  <button className="mt-4 mb-8 w-full rounded-md bg-[#151e31] px-5 py-3 text-sm text-gray-100 transition hover:bg-[#EAC2CF] hover:text-black cursor-pointer">
                    Realizar pedido
                  </button>
                </Link>
              ) : (
                <h2 className="text-center bg-rojo">
                  COMPLETAR TODOS LOS CAMPOS
                </h2>
              )}
            </>
          ) : (
            <></>
          )}
        </form>
      </div>
    </>
  );
}
