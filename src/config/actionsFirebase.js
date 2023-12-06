import { getItems, getItemsCondition, getItem } from "./firebase";

// on firebase navegation
const onNavOptions = async () => {
  const data = await getItems("navegation");
  return [data[0].pages, data[1].sections];
};

//on firebase product
const usePruducts = async (CONDICION) => {
  // console.log(CONDICION);
  if (CONDICION !== "todos") {
    return await getItemsCondition("catalogo", CONDICION);
  } else {
    return await getItems("catalogo");
  }
};

const usePruduct = async (ID) => {
  const data = await getItem("catalogo", ID);
  return { ...data };
};

export { onNavOptions, usePruducts, usePruduct };
