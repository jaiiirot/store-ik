// import Slider from "react-slider";
import { usePruducts } from "../../config/actionsFirebase";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Items from "./Items";
import PaginationFilter from "../PaginationFilter";
import Filter from "../Filter";

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
    <section className="mx-auto w-10/12">
      <div className="px-4">
        <div className="border-b border-gray-200 py-4">
          <h1 className="font-bold text-gray-900 font-family-title">
            Tienda / {itemCategoryTitulo || "Todos"}
          </h1>
        </div>

        <section
          aria-labelledby="products-heading"
          className="pb-24 pt-6 text-center "
        >
          <section className="flex justify-center gap-8">
            {!isHome && !isDetail ? <Filter /> : <></>}

            <article className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-12 ">
                <Items
                  catalogoProductos={products}
                  count={count}
                  category={category}
                />
              </div>
              <div className="w-full place-items-center">
                <PaginationFilter />
              </div>
              {/* <span
                onClick={() => {
                  setCount(count + 5);
                }}
                className="rounded border border-[#400400] bg-[#800600] px-12 py-3 text-sm font-medium text-white hover:bg-[#400400]  focus:outline-none focus:ring  cursor-pointer"
              >
                Ver mas
              </span> */}
            </article>
          </section>
        </section>
      </div>
    </section>
  );
}
export default ItemList;
