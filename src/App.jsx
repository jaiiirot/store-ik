import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextCartUser } from "./context/ContextCart";
import { ItemFinished } from "./components/Checkout/ItemFinished";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Layout from "./components/Layout/Layout";
import Contacto from "./pages/Contacto";
import Devolucion from "./pages/Devolucion";
import Cart from "./pages/Cart";
import ItemCheckout from "./components/Checkout/ItemCheckout";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <ContextCartUser>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/mayorista/" element={<h1>MAYORISTA</h1>} />
            <Route path="/tienda/" element={<ItemList />}>
              <Route path=":itemCategoryTitulo/" element={<ItemList />} />
            </Route>
            <Route
              path="/producto/:producto/"
              element={<ItemDetailContainer />}
            />
            <Route path="contacto/" element={<Contacto />} />
            <Route path="devoluciones/" element={<Devolucion />} />
            <Route path="carrito/">
              <Route index element={<Cart />} />
              <Route path=":idUsuario/checkout/" element={<ItemCheckout />} />
              <Route path=":idUsuario/finished/" element={<ItemFinished />} />
            </Route>
            <Route path="/login/" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </ContextCartUser>
    </BrowserRouter>
  );
}
