import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemLayout from "./components/ItemLayout/ItemLayout";
import Contacto from "./pages/Contacto";
import PoliticaDevolucion from "./pages/PoliticaDevolucion";
import { SolicitarDataProvider } from "./context/DatosProductos";
import Card from "./pages/Card";
import ItemCheckoutContainer from "./components/Checkout/itemCheckoutContainer";
import { ItemFinished } from "./components/Checkout/ItemFinished";
export default function App() {
  return (
    <BrowserRouter>
      <SolicitarDataProvider>
        <Routes>
          <Route path="store-ik" element={<ItemLayout />}>
            <Route index element={<Home />} />
            <Route path=":itemCategoryTitulo">
              <Route index element={<ItemListContainer />} />
              <Route
                path=":itemId/:itemTitulo/"
                element={<ItemDetailContainer />}
              />
            </Route>
            <Route path="contacto/" element={<Contacto />} />
            <Route
              path="politica-de-devolucion/"
              element={<PoliticaDevolucion />}
            />
            <Route path="card/">
              <Route index element={<Card />} />
              <Route
                path=":idUsuario/checkout/"
                element={<ItemCheckoutContainer />}
              />
              <Route path=":idUsuario/finished/" element={<ItemFinished />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </SolicitarDataProvider>
    </BrowserRouter>
  );
}
