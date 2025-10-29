import { Route, Routes } from "react-router-dom";
import HomePage from "./user/pages/HomePage";
import SearchPage from "./user/pages/SearchPage";
import ProductDetailsPage from "./user/pages/ProductDetailsPage";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminPharmacies from "./admin/pages/AdminPharmacies";
import AdminMedicines from "./admin/pages/AdminMedicines";
import AdminAdvertisement from "./admin/pages/AdminAdvertisement";
import AdminSettings from "./admin/pages/AdminSettings";
import SavedPage from "./user/pages/SavedPage";
import ProfilePage from "./user/pages/ProfilePage";
import Login from "./user/components/Login";
import ProductsPage from "./user/pages/ProductsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-result" element={<SearchPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/all-products" element={<ProductsPage />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-pharmacies" element={<AdminPharmacies />} />
        <Route path="/admin-medicines" element={<AdminMedicines />} />
        <Route path="/admin-advertisement" element={<AdminAdvertisement />} />
        <Route path="/admin-settings" element={<AdminSettings />} />
      </Routes>
    </>
  );
}

export default App;
