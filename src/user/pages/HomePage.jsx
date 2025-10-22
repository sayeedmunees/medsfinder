import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import MedicineCard from "../components/MedicineCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const medicineItems = [
    {
      title: "Dolo 650 mg",
      brand: "Micro Labs Ltd",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDBNwIY-Y4GXbwnDDIDQ3XRebYSw9ZPfWkYZlTVu3GWPy0B-wUKRp3q9DIhI6g5hhKriknHpZbV7kUpf-e0uMrYJVuCtRbErVAvI3jravJmUo4328MbCwhHFbY9xw9iGoObx-cBORe8COqr1XM8hwZ9DV334YA_6ApQKeV4zIeKY5I_VEx6lX7LJ6WRviF9cqdgvnH8uTC3j5Y-OycAYi9zHR6QP5v9RphKoCYhV5bxquxjcFabJGeEPBMODu3FDkcLkrb8eIADKHic",
      saved: false,
    },
    {
      title: "Dolo 500 mg",
      brand: "Cipla Ltd",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBlespYj6T17ErYt_OfuwZQH_PHw6QnrvRuSeyBnAm4Iw9XG_RmBd08OiRCOTUNVu6XIjUXt7xyb7VWt3dsIQ25B1izCFOi6F1PL82AJM8JITSX3Hww7yy2trEN69ETej-yxOSacYM_COpXkLkbmOT3zVc9D-CKEu7vo3yUtBRiA8a83TvsgVCJ8vhE8_xGt-Eog9qwRME6v5vviaHxQ2Khl3H7Ci87sJOWTvuQG2DgiCEguLGYvpAVEVNAMDjtRLjkWDZVv7qzuDi8",
      saved: true,
    },
    {
      title: "Dolo 250 mg",
      brand: "Sun Pharma Ltd",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEN4A1OhPMsWaqE-kHhXsKjAG9RumLLkeY6tMqsv1mT7SQcRi0cwP9s98ltvSfy_K-a83v5VTN89AsEipN8S05VM5yfhLf4kMm0d3LVTun4Cyo0xkgSxjnSTQze6_fdPDxMCCUDnOwQRI3dRxDF8GcS1LT33JxPDOSyH7f1s6hwqp3cE5XXkwxMLST_i8ZBl031-R4Xg9IsuMf5TiQRjEKiUkDtLjoxnK9_DPb8nBtM9pRdzkvt1ykOhctO48RRT0IO1nGjbf5wDqZ",
      saved: false,
    },
    {
      title: "Dolo 100 mg",
      brand: "Micro Labs Ltd",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBgjL6tAIFoApwAiwnNUBmDONN1lcpqMzQE4jCgkDglz0q65f9ZN3jcvo68zRbQXakBCU2rygsD6jyP3NILM6KqCF5qij1eA5dj6xz-ceo_JuaRXecs-qAVzgb-ujXF3tdfMecy0ouERajYs7QlZ2if9bEHOpmvWR_cV1ZPZ9Mv_phIuJKFR_T2B-2labLSwKjDlVZrUE4a1-IPN5MsQpl3TXkfHef-Tifdk8pEjVAfI3-NBvl8VVGWQ2rXXdgrRP4kbwcM2AhT5qaa",
      saved: false,
    },
    {
      title: "Dolo 150 mg",
      brand: "Micro Labs Ltd",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC33iN89M3GrWKsEISgEBa7nij9-4jaSVEH5tzvwHyvrUUuRTpdYhBt4dIDkKkGa8D2a--uV9dpZB7tdc-9h-JJOIYhJbjO9dlg2L7L2u3ZSuVHsqBe3sQdkBdhh-80ygj0gw_EL2P_OhIcOpy2jEA84gprW24SkxzblXEZEd6FmY7wbvR8NodR0Nu8lETlUMEQK02k_do6cZCyjyPBaNbNT_jRQTf7jF3QafrgMY3d5To7V4Leiarat_IS6IXfYIcKunuxGEf2oWco",
      saved: true,
    },
  ];

  const productItems = [
    {
      title: "Hydrating Face Cream",
      type: "For all skin types",
      price: "24.99",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBvLeZ2UB_Z7hUGUWiD_SMQmgo5ki0Zs2HAdwJs4OceLFTKFtzFYE5rYREY6DtT0ngzJnvPWr8a1AFlW8uqvDyM1O-H_UBWCJl-jSIlDGlgYyk5gMh3x0GMsfJX0cjWGIa5QA7A-o4gCaz_NVNWSjTJyVNPmnNd4YUVgjAawnvMQd-99vORa2axT7edLac3hKdHQxLzDV_IiZCPArta1ChlSTQrV1-9Nhk_rn3Ik5M6jmVutQePntIRAThCNxO-Dx2B1Hg3BEfVjGI3",
    },
    {
      title: "Vitamin C Serum",
      type: "Brightens & evens skin tone",
      price: "32.00",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBx5o5SBXQPYFQDyqlD1WdR07sICg4lx4wvMZWBhNxIxVMduGSfRUveghapewgGruiMGdNuA9AUzGKMtnvARpnWN4AVkM8LNdUMYrdu1iN7VggoPzPwOXXB8hQiR3ciWZcHINuyKXqgSPN8bAVSh7n35vGl7Us5dXRHAWczGR_i34qNRmzvcQtP7nx_Qxsx8p75uvgPE8zDKLwAc7sXNBfz2WUultVlHXwvn89jqrvq3Avnl3gEU_yILYXwS_4HgQwr9YSP8z-AZ6oP",
    },
    {
      title: "SPF 50+ Sunscreen",
      type: "Broad spectrum protection",
      price: "18.50",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBnNtQwqldxqgKloNFCWev-xiaooqSMrYM07XfhE1flb3wMhCpWJ1hkIa8K_v3-ZSKoy1Bi2fib13AiKDyGiR4z9L01TfxMLjVJ8C6242Llioa9QLYXdnjf_dDzbnGL2HrFbgNyXwK-2zUBiXqTcybIqsc5G6OYX0hAQuZ_K7dACsEcptZwFW_KzomtDj2P7ySure8bdpP-EdXSR1WO0or2GyyG6UAL3fJN8PgKZ5zJsRCJ4Cl7yLI1y6SbRbxrsWAUw7RGoZ3R_1V1",
    },
    {
      title: "Gentle Skin Cleanser",
      type: "Removes dirt and makeup",
      price: "15.99",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBz6umEPlfbAhNMHO4bIymBtEwvzqDqGqHNZKlsKWoXLUSTDbwFZJtn02W-OZKYqkZkGkNIcDB16VwTxuLjG3OTJetLzds1gX6jMo0bxEhlcn4qwgsU8aGUSuAuqV-AzpvHHz-gVG05rF5WbFUnRY6rxCm3wNcB8-8pnFLn4i0KMf0gZLux8AlJDEnXzmmp8HTWNAA6pUnS9UkLsSnvCsUcFeqhgjfGDmMjNmf8ewRbPNE-t6OWi7h-yvao2A0QAuu-eIGsII8DioG7",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* hero */}
        <section className="bg-teal-500 text-white py-20 px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Find medicines faster nearby you
          </h2>
          <p className="text-lg md:text-xl text-white/80 ">
            No more queues to just hear the medicine is out of stock
          </p>
          <div className="mt-8 max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-2 flex items-center space-x-2">
            <div className="flex items-center">
              <span className="material-icons text-gray-500  ml-2">
                location_on
              </span>
              <select className="form-select border-none bg-transparent text-gray-700  focus:ring-0">
                <option>Location</option>
                <option>Edapally</option>
                <option>Kakkanad</option>
                <option>Kalamassery</option>
                <option>Palarivattam</option>
              </select>
            </div>
            <div className="h-8 border-l border-gray-300 "></div>
            <input
              className="w-full form-input border-none bg-transparent text-gray-700 placeholder-gray-500 focus:ring-0"
              placeholder="Search for medicines"
              type="text"
            />
            <Link to={"/search-result"}>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md flex items-center">
                Search
                <span className="material-icons ml-2">search</span>
              </button>
            </Link>
          </div>
        </section>
        {/* Most frequent */}
        <section className="py-16 px-6 md:px-12">
          <h3 className="text-3xl font-bold mb-8 text-gray-800 ">
            Most frequent searches
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {medicineItems.map((item) => {
              return (
                <MedicineCard
                  key={item.title}
                  title={item.title}
                  brand={item.brand}
                  imageURL={item.imageURL}
                  saved={item.saved}
                />
              );
            })}
          </div>
        </section>
        {/* Products */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 ">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800">
              Beauty &amp; Personal Care
            </h3>
            <a
              className="text-primary hover:text-teal-600 font-semibold"
              href="#"
            >
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productItems.map((item) => {
              return (
                <ProductCard
                  key={item.title}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                  imageURL={item.imageURL}
                />
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
