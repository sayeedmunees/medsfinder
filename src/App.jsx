import { Route, Routes, Navigate } from "react-router-dom";
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
import ScrollToTop from "./user/components/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProtected = ({ children }) => {
  const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
  const adminRoles = ["assistant", "editor", "admin"];

  if (existingUser && adminRoles.includes(existingUser.role)) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

function App() {
  return (
    <>
      <ScrollToTop />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
        newestOnTop={true}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-result" element={<SearchPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/all-products" element={<ProductsPage />} />
        <Route path="/signin" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <AdminProtected>
              <AdminDashboard />
            </AdminProtected>
          }
        />
        <Route
          path="/dashboard/pharmacies"
          element={
            <AdminProtected>
              <AdminPharmacies />
            </AdminProtected>
          }
        />
        <Route
          path="/dashboard/medicines"
          element={
            <AdminProtected>
              <AdminMedicines />
            </AdminProtected>
          }
        />
        <Route
          path="/dashboard/advertisement"
          element={
            <AdminProtected>
              <AdminAdvertisement />
            </AdminProtected>
          }
        />
        <Route
          path="/admin-settings"
          element={
            <AdminProtected>
              <AdminSettings />
            </AdminProtected>
          }
        />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
