import React from "react";
import { IoMdClose } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";

const AddPharmacyForm = ({ showAddPharmacy, selectedPharmacy }) => {
  const [pharmacyDetails, setPharmacyDetails] = React.useState({
    name: "",
    location: "Kakkanad",
    contact: "",
    status: "Active",
    mapLink: "",
    rating: "",
    reviews: "",
    medicinesStock: "",
    image: "",
  });

  const [preview, setPreview] = React.useState("");

  React.useEffect(() => {
    if (pharmacyDetails.image) {
      // If it's a file object (new upload)
      if (typeof pharmacyDetails.image !== "string") {
        setPreview(URL.createObjectURL(pharmacyDetails.image));
      } else {
        // If it's a string (existing image from backend)
        import("../../services/serverURL").then(({ serverURL }) => {
             setPreview(`${serverURL}/upload/${pharmacyDetails.image}`);
        });
      }
    }
  }, [pharmacyDetails.image]);


  React.useEffect(() => {
    if (selectedPharmacy) {
      setPharmacyDetails({
        name: selectedPharmacy.pharmacyName,
        location: selectedPharmacy.pharmacyLocationName,
        contact: selectedPharmacy.pharmacyContactNumber,
        status: selectedPharmacy.pharmacyStatus,
        mapLink: selectedPharmacy.pharmacyLocationLink,
        rating: selectedPharmacy.pharmacyRating || "",
        reviews: selectedPharmacy.pharmacyReviews || "",
        medicinesStock: selectedPharmacy.pharmacyMedicinesInStock
          ? selectedPharmacy.pharmacyMedicinesInStock.join(", ")
          : "",
        image: selectedPharmacy.pharmacyImage,
      });
    }
  }, [selectedPharmacy]);


  const handleClose = () => {
    showAddPharmacy(false);
  };

  const handleReset = () => {
    setPharmacyDetails({
      name: "",
      location: "Kakkanad",
      contact: "",
      status: "Active",
      mapLink: "",
      rating: "",
      reviews: "",
      medicinesStock: "",
      image: "",
    });
    setPreview("");
  };

  const handleAddPharmacy = async (e) => {
    e.preventDefault();
    const {
      name,
      location,
      contact,
      status,
      mapLink,
      rating,
      reviews,
      medicinesStock,
      image,
    } = pharmacyDetails;

    if (
      !name ||
      !location ||
      !contact ||
      !status ||
      !mapLink ||
      !rating ||
      !reviews ||
      !medicinesStock ||
      !image
    ) {
      toast.info("Please fill all fields");
    } else {
      const reqBody = new FormData();
      reqBody.append("pharmacyName", name);
      reqBody.append("pharmacyLocationName", location);
      reqBody.append("pharmacyContactNumber", contact);
      reqBody.append("pharmacyStatus", status);
      reqBody.append("pharmacyLocationLink", mapLink);
      reqBody.append("pharmacyRating", rating);
      reqBody.append("pharmacyReviews", reviews || "0");
      reqBody.append("pharmacyMedicinesInStock", medicinesStock);
      reqBody.append("pharmacyImage", image);

      // Retrieving the token from local storage
      const token = sessionStorage.getItem("token");

      if (token) {
        
        try {
          // Import API dynamically or assume imported
          const { addPharmacyAPI, updatePharmacyAPI } = await import("../../services/allAPI");
          
          let result;
          if(selectedPharmacy) {
             // Edit Mode
             const reqHeader = {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              };
             result = await updatePharmacyAPI(selectedPharmacy._id, reqBody, reqHeader);
          } else {
            // Add Mode
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              };
            result = await addPharmacyAPI(reqBody, reqHeader);
          }

          if (result.status === 200) {
            toast.success(selectedPharmacy ? "Pharmacy Updated Successfully" : "Pharmacy Added Successfully");
            handleReset();
            setTimeout(() => {
              showAddPharmacy(false);
            }, 2000);
          } else {
            toast.warning(result.response?.data || "Something went wrong");
          }
        } catch (err) {
          console.error(err);
          toast.error("Error adding/updating pharmacy");
        }
      }
    }
  };

  return (
    <>
      <div className="hidden md:flex fixed top-0 left-0 w-full h-full bg-black/70 justify-center items-center z-100">
        <div className="bg-white border w-[90%] max-w-[800px] p-8 shadow rounded-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 ">
              {selectedPharmacy ? "Edit Pharmacy" : "Add New Pharmacy"}
            </h3>
            <button onClick={handleClose} className="text-2xl">
              <IoMdClose />
            </button>
          </div>
          <form onSubmit={handleAddPharmacy} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-name"
              >
                Pharmacy Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="pharmacy-name"
                placeholder="Type Pharmacy name"
                type="text"
                value={pharmacyDetails.name}
                onChange={(e) =>
                  setPharmacyDetails({ ...pharmacyDetails, name: e.target.value })
                }
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-location"
              >
                Location
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                id="pharmacy-location"
                value={pharmacyDetails.location}
                onChange={(e) =>
                  setPharmacyDetails({
                    ...pharmacyDetails,
                    location: e.target.value,
                  })
                }
              >
                <option value="Edapally">Edapally</option>
                <option value="Kakkanad">Kakkanad</option>
                <option value="Kalamassery">Kalamassery</option>
                <option value="Palarivattam">Palarivattam</option>
              </select>
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-contact"
              >
                Contact
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="pharmacy-contact"
                placeholder="Type Phone Number"
                type="tel"
                value={pharmacyDetails.contact}
                onChange={(e) =>
                  setPharmacyDetails({
                    ...pharmacyDetails,
                    contact: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-status"
              >
                Status
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                id="pharmacy-status"
                value={pharmacyDetails.status}
                onChange={(e) =>
                  setPharmacyDetails({
                    ...pharmacyDetails,
                    status: e.target.value,
                  })
                }
              >
                <option className="text-green-600" value="Active">
                  Active
                </option>
                <option className="text-red-600" value="Inactive">
                  Inactive
                </option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-link"
              >
                Map Link
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="pharmacy-link"
                placeholder="Type Map Link"
                type="url"
                value={pharmacyDetails.mapLink}
                onChange={(e) =>
                  setPharmacyDetails({
                    ...pharmacyDetails,
                    mapLink: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-rating"
              >
                Rating
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="pharmacy-rating"
                placeholder="Type Rating"
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={pharmacyDetails.rating}
                onChange={(e) =>
                  setPharmacyDetails({
                    ...pharmacyDetails,
                    rating: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-reviews"
              >
                Reviews
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="pharmacy-reviews"
                placeholder="Type Review Count"
                type="number"
                min="0"
                value={pharmacyDetails.reviews}
                onChange={(e) =>
                  setPharmacyDetails({
                    ...pharmacyDetails,
                    reviews: e.target.value,
                  })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-stock"
              >
                Medicines in Stock (comma separated)
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none resize-y"
                id="pharmacy-stock"
                placeholder="e.g., Paracetamol, Aspirin, Ibuprofen"
                rows="3"
                value={pharmacyDetails.medicinesStock}
                onChange={(e) =>
                  setPharmacyDetails({
                    ...pharmacyDetails,
                    medicinesStock: e.target.value,
                  })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Pharmacy-image"
              >
                Pharmacy Image
              </label>
              <input
                className="block w-full p-2 text-gray-700  border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none"
                id="Pharmacy-image"
                type="file"
                onChange={(e) => {
                  setPharmacyDetails({
                    ...pharmacyDetails,
                    image: e.target.files[0],
                  });
                }}
              />
              <p className="mt-1 text-sm text-gray-500">
                PNG or JPG (MAX. 800x400px).
              </p>
            </div>
            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                onClick={handleReset}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-2"
                type="button"
              >
                Cancel
              </button>
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg"
                type="submit"
              >
                Save Pharmacy
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer theme="colored" position="top-center" autoClose={3000} />
    </>
  );
};

export default AddPharmacyForm;
