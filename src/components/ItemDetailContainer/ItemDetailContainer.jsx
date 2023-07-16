import { getProductsById } from "../../asset/catalogue/catalogue";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { itemId } = useParams();
  useEffect(() => {
    getProductsById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [itemId]);

  return (
    <>
      <div className="bg-white">
        <ItemDetail {...product} />
      </div>
      <div className="DetailMore">
        <ItemListContainer quantity={6} isDetail/>
      </div>
    </>
  );
}
