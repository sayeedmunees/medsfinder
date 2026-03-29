import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { addProductAPI } from "../../services/allAPI";
import { toast } from "react-toastify";
import { compressImage, ALLOWED_IMAGE_TYPES } from "../../services/imageCompression";

const AddProductForm = ({ showAddProduct }) => {
  const [productData, setProductData] = useState({
    productName: "",
    brandName: "",
    category: "Cleanser",
    description: "",
    price: "",
    uploadedImg: null,
  });

  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (productData.uploadedImg) {
      setPreview(URL.createObjectURL(productData.uploadedImg));
    }
  }, [productData.uploadedImg]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const { productName, brandName, category, description, price, uploadedImg } = productData;

    if (!productName || !brandName || !category || !description || !price || !uploadedImg) {
      toast.warning("Please fill the form completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("productName", productName);
      reqBody.append("brandName", brandName);
      reqBody.append("category", category);
      reqBody.append("description", description);
      reqBody.append("price", price);
      reqBody.append("uploadedImg", uploadedImg);

      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };

        try {
          const result = await addProductAPI(reqBody, reqHeader);
          if (result.status === 200) {
            toast.success("Product Added Successfully");
            setProductData({
              productName: "",
              brandName: "",
              category: "Cleanser",
              description: "",
              price: "",
              uploadedImg: null,
            });
            showAddProduct();
          } else {
            toast.error(result.response.data);
          }
        } catch (error) {
          console.log(error);
          toast.error("An error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <>
      <div className="hidden md:flex fixed top-0 left-0 w-full h-full bg-black/70 justify-center items-center z-100">
        <div className="bg-white border w-[90%] max-w-[800px] p-8 shadow rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 ">
              Add New Product
            </h3>
            <button onClick={showAddProduct} className="text-2xl">
              <IoMdClose />
            </button>
          </div>
          <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product-name"
              >
                Product Name
              </label>
              <input
                onChange={(e) =>
                  setProductData({ ...productData, productName: e.target.value })
                }
                value={productData.productName}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="product-name"
                placeholder="Type Product Name"
                type="text"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="brand-name"
              >
                Brand Name
              </label>
              <input
                onChange={(e) =>
                  setProductData({ ...productData, brandName: e.target.value })
                }
                value={productData.brandName}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="brand-name"
                placeholder="Enter Brand Name"
                type="text"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product-category"
              >
                Category
              </label>
              <select
                onChange={(e) =>
                  setProductData({ ...productData, category: e.target.value })
                }
                value={productData.category}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                id="product-category"
              >
                <option>Cleanser</option>
                <option>Hair Care</option>
                <option>Moisturizer</option>
                <option>Skin Care</option>
                <option>Sunscreen</option>
              </select>
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product-price"
              >
                Price
              </label>
              <input
                onChange={(e) =>
                  setProductData({ ...productData, price: e.target.value })
                }
                value={productData.price}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="product-price"
                placeholder="e.g., 7"
                step="0.5"
                type="number"
              />
            </div>

            <div className="md:col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product-description"
              >
                Product Description
              </label>
              <textarea
                onChange={(e) =>
                  setProductData({ ...productData, description: e.target.value })
                }
                value={productData.description}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none h-20"
                id="product-description"
                placeholder="A description of the product..."
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product-image"
              >
                Product Image
              </label>
              <div className="flex items-center gap-4">
                <input
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (!file) return;

                    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
                      toast.error("Only JPG, JPEG, PNG, and WEBP formats are supported.");
                      return;
                    }

                    if (file.size > 200 * 1024) {
                      const toastId = toast.loading("Optimizing product image...");
                      try {
                        const compressed = await compressImage(file, 150);
                        setProductData({ ...productData, uploadedImg: compressed });
                        toast.update(toastId, { render: "Image optimized!", type: "success", isLoading: false, autoClose: 2000 });
                      } catch (err) {
                        toast.update(toastId, { render: "Compression failed, using original...", type: "warning", isLoading: false, autoClose: 2000 });
                        setProductData({ ...productData, uploadedImg: file });
                      }
                    } else {
                      setProductData({ ...productData, uploadedImg: file });
                    }
                  }}
                  className="block w-full p-2 text-gray-700  border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none"
                  id="product-image"
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                )}
              </div>
              <p className="mt-1 text-sm text-gray-500">
                PNG, JPG or WEBP (MAX. 200KB).
              </p>
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                onClick={showAddProduct}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-2"
                type="button"
              >
                Cancel
              </button>
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg"
                type="submit"
              >
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
