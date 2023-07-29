import { useEffect, useState } from "react";
import { db, deleteItem, getItems, addItem, setItem } from "../config/firebase";

export default function Crud() {
  const [element, setElement] = useState([]);
  const onCatalogue = async () => {
    setElement(await getItems("catalogo"));
  };

  const DeleteItem = async (ID) => {
    await deleteItem("catalogo", ID);
    onCatalogue();
  };

  //______________________________________________________
  // //FORM
  // const [formState, setFormState] = useState(
  //   /*{
  //   img: "",
  //   name: "",
  //   price: 0,
  //   stock: 0,
  //   description: "",
  //   idCategory: "",
  // }*/
  //   {
  //     img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/053/068/products/erevan1-8b36bc6407b6aa73df16903870015577-480-0.webp",
  //     name: "Sweater lanita trenzada irregular con tajos en puño y cuerpo Erevan",
  //     price: 3990,
  //     stock: 39,
  //     idCategory: "sweaters-y-poleras",
  //     description:
  //       "Sweater lanita trenzada irregular con tajos en puño y cuerpo Erevan con el siguiente precio $3990 se encuentra en la categoria sweaters y poleras de Indumentaria Kevin ",
  //   }
  // );
  // const { img, name, price, stock, description, idCategory } = formState;
  // const onSubmitForm = ({ target }) => {
  //   const { name, value } = target;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   // AGREGAR ITEMS
  //   addItem({ ...formState });
  //   onCatalogue();
  // };
  //______________________________________________________

  useEffect(() => {
    onCatalogue();
  }, [db]);

  return (
    <main className="overflow-x-auto py-16">
      {/*<div action="" method="get" className=" mb-8 border-2 text-center">
        <form onSubmit={onSubmit}>
          <p>img</p>
          <input type="text" name="img" value={img} onChange={onSubmitForm} />
          <p>nombre</p>
          <input type="text" name="name" value={name} onChange={onSubmitForm} />
          <p>price</p>
          <input
            type="text"
            name="price"
            value={price}
            onChange={onSubmitForm}
          />
          <p>stock</p>
          <input
            type="text"
            name="stock"
            value={stock}
            onChange={onSubmitForm}
          />
          <p>description</p>
          <input
            type="text"
            name="description"
            value={description}
            onChange={onSubmitForm}
          />
          <p>ID category</p>
          <input
            type="text"
            name="idCategory"
            value={idCategory}
            onChange={onSubmitForm}
          />
          <button className="py-2 px-4 bg-teal-700" type="submit">
            enviar
          </button>
        </form>
      </div> */}

      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
              id
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
              name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
              price
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
              stock
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
              description
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
              Idcategori
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {element.map((prod) => {
            return (
              <tr key={prod.id}>
                <td className="p-2 font-medium text-gray-900 dark:text-white">
                  {prod.id}
                </td>
                <td className=" px-4 py-2 text-gray-700 dark:text-gray-200">
                  {prod.name}
                </td>
                <td className=" px-4 py-2 text-gray-700 dark:text-gray-200">
                  {prod.price}
                </td>
                <td className=" px-4 py-2 text-gray-700 dark:text-gray-200">
                  {prod.stock}
                </td>
                <td className=" px-4 py-2 text-gray-700 dark:text-gray-200">
                  {prod.description}
                </td>
                <td className=" px-4 py-2 text-gray-700 dark:text-gray-200">
                  {prod.idCategory}
                </td>
                <td>
                  <button
                    onClick={() => {
                      DeleteItem(prod.id);
                    }}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
