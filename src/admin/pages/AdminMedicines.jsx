import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const AdminMedicines = () => {
  const medicineItems = [
    {
      name: "Dolo 650 mg",
      brand: "Micro Labs Ltd",
      generic: "paracetamol",
      description:
        "Dolo 650 mg is a paracetamol (acetaminophen) based medication primarily used to relieve mild to moderate pain and reduce fever. It is effective for headaches, muscle aches, arthritis, backache, toothaches, colds, and fevers. Known for its quick action and minimal side effects when taken as directed.",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDBNwIY-Y4GXbwnDDIDQ3XRebYSw9ZPfWkYZlTVu3GWPy0B-wUKRp3q9DIhI6g5hhKriknHpZbV7kUpf-e0uMrYJVuCtRbErVAvI3jravJmUo4328MbCwhHFbY9xw9iGoObx-cBORe8COqr1XM8hwZ9DV334YA_6ApQKeV4zIeKY5I_VEx6lX7LJ6WRviF9cqdgvnH8uTC3j5Y-OycAYi9zHR6QP5v9RphKoCYhV5bxquxjcFabJGeEPBMODu3FDkcLkrb8eIADKHic",
    },
    {
      name: "Dolo 500 mg",
      brand: "Cipla Ltd",
      generic: "paracetamol",
      description:
        "Dolo 650 mg is a paracetamol (acetaminophen) based medication primarily used to relieve mild to moderate pain and reduce fever. It is effective for headaches, muscle aches, arthritis, backache, toothaches, colds, and fevers. Known for its quick action and minimal side effects when taken as directed.",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBlespYj6T17ErYt_OfuwZQH_PHw6QnrvRuSeyBnAm4Iw9XG_RmBd08OiRCOTUNVu6XIjUXt7xyb7VWt3dsIQ25B1izCFOi6F1PL82AJM8JITSX3Hww7yy2trEN69ETej-yxOSacYM_COpXkLkbmOT3zVc9D-CKEu7vo3yUtBRiA8a83TvsgVCJ8vhE8_xGt-Eog9qwRME6v5vviaHxQ2Khl3H7Ci87sJOWTvuQG2DgiCEguLGYvpAVEVNAMDjtRLjkWDZVv7qzuDi8",
    },
    {
      name: "Dolo 250 mg",
      brand: "Sun Pharma Ltd",
      generic: "paracetamol",
      description:
        "Dolo 650 mg is a paracetamol (acetaminophen) based medication primarily used to relieve mild to moderate pain and reduce fever. It is effective for headaches, muscle aches, arthritis, backache, toothaches, colds, and fevers. Known for its quick action and minimal side effects when taken as directed.",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEN4A1OhPMsWaqE-kHhXsKjAG9RumLLkeY6tMqsv1mT7SQcRi0cwP9s98ltvSfy_K-a83v5VTN89AsEipN8S05VM5yfhLf4kMm0d3LVTun4Cyo0xkgSxjnSTQze6_fdPDxMCCUDnOwQRI3dRxDF8GcS1LT33JxPDOSyH7f1s6hwqp3cE5XXkwxMLST_i8ZBl031-R4Xg9IsuMf5TiQRjEKiUkDtLjoxnK9_DPb8nBtM9pRdzkvt1ykOhctO48RRT0IO1nGjbf5wDqZ",
    },
    {
      name: "Dolo 100 mg",
      brand: "Micro Labs Ltd",
      generic: "paracetamol",
      description:
        "Dolo 650 mg is a paracetamol (acetaminophen) based medication primarily used to relieve mild to moderate pain and reduce fever. It is effective for headaches, muscle aches, arthritis, backache, toothaches, colds, and fevers. Known for its quick action and minimal side effects when taken as directed.",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBgjL6tAIFoApwAiwnNUBmDONN1lcpqMzQE4jCgkDglz0q65f9ZN3jcvo68zRbQXakBCU2rygsD6jyP3NILM6KqCF5qij1eA5dj6xz-ceo_JuaRXecs-qAVzgb-ujXF3tdfMecy0ouERajYs7QlZ2if9bEHOpmvWR_cV1ZPZ9Mv_phIuJKFR_T2B-2labLSwKjDlVZrUE4a1-IPN5MsQpl3TXkfHef-Tifdk8pEjVAfI3-NBvl8VVGWQ2rXXdgrRP4kbwcM2AhT5qaa",
    },
    {
      name: "Dolo 150 mg",
      brand: "Micro Labs Ltd",
      generic: "paracetamol",
      description:
        "Dolo 650 mg is a paracetamol (acetaminophen) based medication primarily used to relieve mild to moderate pain and reduce fever. It is effective for headaches, muscle aches, arthritis, backache, toothaches, colds, and fevers. Known for its quick action and minimal side effects when taken as directed.",
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC33iN89M3GrWKsEISgEBa7nij9-4jaSVEH5tzvwHyvrUUuRTpdYhBt4dIDkKkGa8D2a--uV9dpZB7tdc-9h-JJOIYhJbjO9dlg2L7L2u3ZSuVHsqBe3sQdkBdhh-80ygj0gw_EL2P_OhIcOpy2jEA84gprW24SkxzblXEZEd6FmY7wbvR8NodR0Nu8lETlUMEQK02k_do6cZCyjyPBaNbNT_jRQTf7jF3QafrgMY3d5To7V4Leiarat_IS6IXfYIcKunuxGEf2oWco",
    },
  ];
  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar from="medicine" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="medicines" />
          <main className="flex-1 p-6 md:p-12 bg-gray-100  overflow-y-auto">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div className="flex items-center px-2  py-2 border border-gray-300  rounded-lg bg-white w-full md:w-1/3 mb-4 md:mb-0">
                  <input
                    className="w-full border-0 text-gray-800  rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Search by name, location..."
                    type="text"
                  />
                  <span className="material-icons px-2 text-gray-400">
                    search
                  </span>
                </div>
                <button className="flex items-center justify-center px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-colors">
                  <span className="material-icons mr-2">add</span>
                  Add New Medicine
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 ">
                      <th className="p-4 font-semibold text-gray-600">
                        <button className="flex items-center">
                          Name
                          <span className="material-icons text-sm ml-1">
                            unfold_more
                          </span>
                        </button>
                      </th>
                      <th className="p-4 font-semibold text-gray-600 ">
                        <button className="flex items-center">
                          Brand
                          <span className="material-icons text-sm ml-1">
                            unfold_more
                          </span>
                        </button>
                      </th>
                      <th className="p-4 font-semibold text-gray-600 ">
                        Generic
                      </th>
                      <th className="p-4 font-semibold text-gray-600 ">
                        Description
                      </th>
                      <th className="p-4 font-semibold text-gray-600 ">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 ">
                    {medicineItems.map((medicine) => {
                      return (
                        <tr key={medicine.name}>
                          <td className="p-4 text-gray-800 ">
                            {medicine.name}
                          </td>
                          <td className="p-4 text-gray-600 ">
                            {medicine.brand}
                          </td>
                          <td className="p-4 text-gray-600 ">
                            {medicine.generic}
                          </td>
                          <td className="p-4 text-gray-600">
                            {medicine.description}
                          </td>

                          <td className="p-4 flex space-x-2">
                            <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100 ">
                              <span className="material-icons">edit</span>
                            </button>
                            <button className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 ">
                              <span className="material-icons">delete</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-gray-500 ">
                  Showing 1 to 5 of 150 entries
                </p>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 border border-gray-300  rounded-md text-gray-600 hover:bg-gray-100 ">
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-teal-500 bg-teal-500 text-white rounded-md">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300  rounded-md text-gray-600  hover:bg-gray-100 ">
                    2
                  </button>
                  <button className="px-3 py-1 border border-gray-300  rounded-md text-gray-600  hover:bg-gray-100 ">
                    3
                  </button>
                  <span className="text-gray-500">...</span>
                  <button className="px-3 py-1 border border-gray-300  rounded-md text-gray-600  hover:bg-gray-100">
                    30
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 ">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminMedicines;
