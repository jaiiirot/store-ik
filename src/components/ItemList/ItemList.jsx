import { usePruducts } from "../../config/actionsFirebase";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Item from "./Item";

const LINK = {
  home: "todos/",
  detail: "../",
};

function ItemList({ quantity = 3, isDetail = false, isHome = false }) {
  const { itemCategoryTitulo } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([""]);
  const [count, setCount] = useState(quantity);
  async function onProducts(CONDICION) {
    const prod = await usePruducts(CONDICION);
    setProducts(prod);
  }
  useEffect(() => {
    if (isHome) setCategory(LINK.home);
    if (isDetail) setCategory(LINK.detail);

    onProducts(itemCategoryTitulo || "todos");
  }, [itemCategoryTitulo]);
  return (
    <div className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="border-b-2 border-gray-200 py-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 font-family-title">
            {itemCategoryTitulo}
          </h1>
        </div>

        <section
          aria-labelledby="products-heading"
          className="pb-24 pt-6 text-center "
        >
          <section className="w-full flex justify-center gap-8">
            {!isHome && !isDetail ? (
              <aside className="hidden md:flex md:w-2/12 md:flex-col md:border-x-2 ">
                <div>
                  <h3>Totle</h3>
                  <ul>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                  </ul>
                </div>
                <div>
                  <h3>Totle</h3>
                  <ul>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                  </ul>
                </div>
                <div>
                  <h3>Totle</h3>
                  <ul>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                  </ul>
                </div>
                <div>
                  <h3>Totle</h3>
                  <ul>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                  </ul>
                </div>
                <div>
                  <h3>Totle</h3>
                  <ul>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                    <li>hola 2.0</li>
                  </ul>
                </div>
              </aside>
            ) : (
              <></>
            )}

            <article className="lg:w-8/12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-12 ">
                <Item
                  catalogoProductos={products}
                  count={count}
                  category={category}
                />
              </div>

              <span
                onClick={() => {
                  setCount(count + 5);
                }}
                className="rounded border border-[#400400] bg-[#800600] px-12 py-3 text-sm font-medium text-white hover:bg-[#400400]  focus:outline-none focus:ring  cursor-pointer"
              >
                Ver mas
              </span>
            </article>
          </section>
        </section>
      </div>
    </div>
  );
}
export default ItemList;
