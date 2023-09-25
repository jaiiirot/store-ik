import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { usePruducts } from "../../config/actionsFirebase";

function ItemListContainer({
  quantity = 10,
  isDetail = false,
  isHome = false,
}) {
  const [products, setProducts] = useState([]);
  const { itemCategoryTitulo } = useParams();
  const [count, setCount] = useState(quantity);

  console.log(itemCategoryTitulo);

  let isProds, isProdsUrl;
  if (isDetail) isProdsUrl = "../";
  if (isHome) {
    isProds = "todos";
    isProdsUrl = "todos/";
  }
  const onProducts = async (CONDICION) => {
    const prod = await usePruducts(CONDICION);
    setProducts(prod);
  };
  useEffect(() => {
    onProducts(itemCategoryTitulo || isProds);
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
          className="pb-24 pt-6 text-center"
        >
          <div className="w-full">
            {/* Product grid */}
            <div className="lg:w-9/12 m-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-12 ">
                <ItemList
                  catalogoProductos={products}
                  count={count}
                  isDetailUrl={isProdsUrl}
                />
              </div>
            </div>
          </div>
          <span
            onClick={() => {
              setCount(count + 5);
            }}
            className="rounded border border-[#400400] bg-[#400400] px-12 py-3 text-sm font-medium text-white hover:bg-[#800600]  focus:outline-none focus:ring  cursor-pointer"
          >
            Ver mas
          </span>
        </section>
      </div>
    </div>
  );
}
export default ItemListContainer;
