import { Route, Routes } from "react-router";
import Home from "./components/Home";
import CoreType from "./components/CoreType";
import ListProduct from "./components/ListProduct";
import FormCreateProduct from "./components/FormCreateProduct";
import ClientLayout from "./Layouts/ClientLayout";
import FormUpdateProduct from "./components/FormUpdateProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/core-type" element={<CoreType />} />
          <Route path="/products" element={<ListProduct />} />
          <Route path="/create-product" element={<FormCreateProduct />} />
          <Route path="/update-product/:id" element={<FormUpdateProduct/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
