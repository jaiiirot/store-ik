import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextCartUser } from "./context/ContextCart";
import { ItemFinished } from "./components/Checkout/ItemFinished";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Layout from "./components/Layout/Layout";
import Contacto from "./pages/Contacto";
import Devolucion from "./pages/Devolucion";
import Cart from "./pages/Cart";
import ItemCheckoutContainer from "./components/Checkout/itemCheckoutContainer";
export default function App() {
  return (
    <BrowserRouter>
      <ContextCartUser>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=":itemCategoryTitulo">
              <Route index element={<ItemListContainer />} />
              <Route
                path=":itemId/:itemTitulo/"
                element={<ItemDetailContainer />}
              />
            </Route>
            <Route path="contacto/" element={<Contacto />} />
            <Route path="devoluciones/" element={<Devolucion />} />
            <Route path="cart/">
              <Route index element={<Cart />} />
              <Route
                path=":idUsuario/checkout/"
                element={<ItemCheckoutContainer />}
              />
              <Route path=":idUsuario/finished/" element={<ItemFinished />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </ContextCartUser>
    </BrowserRouter>
  );
}
