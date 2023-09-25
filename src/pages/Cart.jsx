import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { DataCart } from "../context/ContextCart";
import ItemProgress from "../components/Checkout/ItemProgress";

export default function Cart() {
  const [priceTotal, setPriceTotal] = useState(0);
  const {
    card,
    idUser,
    getCardLocalStorage,
    setCardLocalStorage,
    setSaveInformation,
    RemoveItem,
    ClearCard,
  } = useContext(DataCart);

  const calTotal = () => {
    const total = card.reduce(
      (total, prod) => total + prod.price * prod.quantity,
      0
    );
    setPriceTotal(total);
  };

  useEffect(() => {
    calTotal();
    setSaveInformation({
      product: card,
      id: idUser,
      subtotal: priceTotal,
      desc: priceTotal * 0.3,
      total: priceTotal - priceTotal * 0.3,
      state: priceTotal > 0 ? true : false,
    });
  }, [card, priceTotal]);

  return (
    <section className="px-4 lg:px-20 py-5 m-auto">
      <ItemProgress progress={"w-1/12"} direccion="" pago="" />

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Carrito</h2>

        <section className="mt-8">
          <ul className="space-y-4">
            {card.length > 0 ? (
              card.map((e) => {
                return (
                  <li
                    key={e.id}
                    className="flex items-center justify-between gap-4 flex-col sm:grid sm:grid-cols-3 sm:items-center sm:justify-items-center border-2 py-2"
                  >
                    <div className="flex items-center flex-col gap-2 sm:flex-row">
                      <img
                        src={e.img}
                        alt=""
                        className="h-16 w-16 rounded object-cover"
                      />

                      <h3 className="text-xs md:text-sm text-gray-900 sm:w-full :min-w-[200px] ">
                        {e.name}
                      </h3>
                    </div>
                    <div>
                      <span>${e.price}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-base">{e.quantity}</p>
                      <button
                        className="text-[#151e31] transition hover:text-red-600"
                        onClick={() => {
                          RemoveItem(e.id);
                        }}
                      >
                        <i className="fa-solid fa-trash h-5 w-5"></i>
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <>
                <h2>No hay productos agregados</h2>
                <span
                  onClick={() => {
                    getCardLocalStorage();
                  }}
                  className="block rounded bg-[#400400] px-5 py-3 text-sm text-gray-100 transition hover:bg-[#902620] hover:text-black cursor-pointer w-max"
                >
                  Recuperar mi carrito
                </span>
              </>
            )}
            {card.length > 0 ? (
              <li className="flex gap-1">
                <span
                  onClick={() => {
                    setCardLocalStorage();
                  }}
                  className="block rounded bg-[#400400] px-5 py-3 text-sm text-gray-100 transition hover:bg-[#902620] cursor-pointer w-max"
                >
                  Guardar mi carrito
                </span>
                <span
                  onClick={() => {
                    ClearCard();
                  }}
                  className="block rounded bg-[#400400] px-5 py-3 text-sm text-gray-100 transition hover:bg-[#902620]  cursor-pointer w-max"
                >
                  Limpiar mi carrito
                </span>
              </li>
            ) : (
              <></>
            )}
          </ul>

          <div className="mt-8 flex justify-end border-t border-gray-300 pt-8">
            <div className="w-screen max-w-lg space-y-4">
              <h3 className="text-xl text-center">RESUMEN DE COMPRA</h3>
              <div className="space-y-0.5 text-sm text-gray-700">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>${priceTotal}</dd>
                </div>

                <div className="flex justify-between">
                  <dt>Descuento del 30%</dt>
                  <dd>${priceTotal * 0.3}</dd>
                </div>

                <div className="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd className="text-2xl">
                    ${(priceTotal - priceTotal * 0.3).toLocaleString("es")}
                  </dd>
                </div>
              </div>

              <div className="flex justify-end">
                {idUser !== "" ? (
                  <Link
                    to={`${idUser}/checkout/`}
                    className="block rounded bg-[#400400] px-5 py-3 text-sm text-white transition hover:bg-[#800700] cursor-pointer"
                  >
                    Comprar
                  </Link>
                ) : (
                  <div>
                    <p>Para poder finalizar la compra debe Iniciar Sesion</p>
                    <span className="block w-max rounded bg-[#151e31] px-5 py-3 text-sm text-gray-100 transition hover:bg-[#EAC2CF] hover:text-black cursor-pointer">
                      Iniciar Sesion
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
