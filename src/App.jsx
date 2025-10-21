import { Route, Routes } from "react-router-dom";
import HomePage from "./user/pages/HomePage";
import SearchPage from "./user/pages/SearchPage";
import ProductDetailsPage from "./user/pages/ProductDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-result" element={<SearchPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
