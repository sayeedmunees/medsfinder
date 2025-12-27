import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { updateProductAPI } from "../../services/allAPI";
import { serverURL } from "../../services/serverURL";
import { toast } from "react-toastify";

const EditProductForm = ({ product, showEditProduct, onUpdateSuccess }) => {
  const [productData, setProductData] = useState({
    id: product._id,
    productName: product.productName,
    brandName: product.brandName,
    category: product.category,
    description: product.description,
    price: product.price,
    uploadedImg: "",
  });

  const [preview, setPreview] = useState(`${serverURL}/upload/${product.uploadedImg}`);

  useEffect(() => {
    if (productData.uploadedImg) {
      setPreview(URL.createObjectURL(productData.uploadedImg));
    }
  }, [productData.uploadedImg]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const { id, productName, brandName, category, description, price, uploadedImg } = productData;

    if (!productName || !brandName || !category || !description || !price) {
      toast.warning("Please fill the form completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("productName", productName);
      reqBody.append("brandName", brandName);
      reqBody.append("category", category);
      reqBody.append("description", description);
      reqBody.append("price", price);
      uploadedImg ? reqBody.append("uploadedImg", uploadedImg) : reqBody.append("uploadedImg", product.uploadedImg);

      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };

        try {
          const result = await updateProductAPI(id, reqBody, reqHeader);
          if (result.status === 200) {
            toast.success("Product Updated Successfully");
            onUpdateSuccess();
            showEditProduct();
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
              Edit Product Details
            </h3>
            <button onClick={showEditProduct} className="text-2xl">
              <IoMdClose />
            </button>
          </div>
          <form onSubmit={handleUpdateProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-product-name">
                Product Name
              </label>
              <input
                onChange={(e) => setProductData({ ...productData, productName: e.target.value })}
                value={productData.productName}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="edit-product-name"
                placeholder="Type Product Name"
                type="text"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-brand-name">
                Brand Name
              </label>
              <input
                onChange={(e) => setProductData({ ...productData, brandName: e.target.value })}
                value={productData.brandName}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="edit-brand-name"
                placeholder="Enter Brand Name"
                type="text"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-product-category">
                Category
              </label>
              <select
                onChange={(e) => setProductData({ ...productData, category: e.target.value })}
                value={productData.category}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                id="edit-product-category"
              >
                <option>Cleanser</option>
                <option>Hair Care</option>
                <option>Moisturizer</option>
                <option>Skin Care</option>
                <option>Sunscreen</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-product-price">
                Price
              </label>
              <input
                onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                value={productData.price}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="edit-product-price"
                placeholder="e.g., 7"
                step="0.5"
                type="number"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-product-description">
                Product Description
              </label>
              <textarea
                onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                value={productData.description}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none h-20"
                id="edit-product-description"
                placeholder="A description of the product..."
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-product-image">
                Product Image
              </label>
              <div className="flex items-center gap-4">
                <input
                  onChange={(e) => setProductData({ ...productData, uploadedImg: e.target.files[0] })}
                  className="block w-full p-2 text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none"
                  id="edit-product-image"
                  type="file"
                />
                {preview && (
                  <img src={preview} alt="Preview" className="w-20 h-20 object-cover rounded-lg" />
                )}
              </div>
              <p className="mt-1 text-sm text-gray-500">
                PNG or JPG(MAX. 800x400px). Leave empty to keep existing.
              </p>
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                onClick={showEditProduct}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-2"
                type="button"
              >
                Cancel
              </button>
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg"
                type="submit"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProductForm;
