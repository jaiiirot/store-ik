import {
  getProducts,
  getProductsByCategory,
} from "../../asset/catalogue/catalogue";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ quantity = 10, isDetail = false ,isHome = ''}) {
  const [products, setProducts] = useState([]);
  const { itemCategoryTitulo } = useParams();
  const [count, setCount] = useState(quantity);
  
  // const isHomeUrl = (itemCategoryTitulo === true)||'todos/' 
  // console.log(isHomeUrl)
  const isDetailUrl = isDetail ? `../` : isHome;

  useEffect(() => {
    const asyncFunc = itemCategoryTitulo ? getProductsByCategory : getProducts;
    asyncFunc(itemCategoryTitulo)
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [itemCategoryTitulo]);
  return (
    <div className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 py-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {itemCategoryTitulo}
          </h1>
        </div>

        <section
          aria-labelledby="products-heading"
          className="pb-24 pt-6 text-center"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6">
            {/* Product grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pb-12">
                <ItemList
                  catalogoProductos={products}
                  count={count}
                  isDetailUrl={isDetailUrl}
                />
              </div>
            </div>
          </div>
          <span
            onClick={() => {
              setCount(count + 5);
            }}
            className="rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 cursor-pointer"
          >
            Ver mas
          </span>
        </section>
      </div>
    </div>
  );
}
export default ItemListContainer;
