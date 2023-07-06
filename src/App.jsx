import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemLayout from "./components/ItemLayout/ItemLayout";
import Compania from "./pages/compania";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemLayout />}>
          <Route index element={<Home />} />
          <Route path=":itemCategoryTitulo">
            <Route index element={<ItemListContainer />} />
            <Route
              path=":itemId/:itemTitulo/"
              element={<ItemDetailContainer />}
            />
          </Route>
          <Route path=":compania/" element={<Compania />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
