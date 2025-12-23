import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// signup using post
export const signupAPI = async (reqBody) => {
  console.log(reqBody);
  return commonAPI(`POST`, `${serverURL}/signup`, reqBody);
};

// signin using post
export const signinAPI = async (reqBody) => {
  console.log(reqBody);
  return commonAPI(`POST`, `${serverURL}/signin`, reqBody);
};

// google signin
export const googleSigninAPI = async (reqBody) => {
  return await commonAPI(`POST`, `${serverURL}/google-signin`, reqBody);
};

// ADMIN PAGE //

// Dashbaord
// get total medicines, pharamacy and products

// Medicine
// get all medicines - GET
export const getAllMedicinesAPI = async () => {
  return await commonAPI(`GET`, `${serverURL}/all-medicines`);
};

// search medicines
export const searchMedicineAPI = async (searchKey) => {
  return await commonAPI(`GET`, `${serverURL}/search-medicines?search=${searchKey}`);
};

// get a medicine
// get a view book
export const viewMedicineAPI = async (id) => {
  return await commonAPI(`GET`, `${serverURL}/view-medicine/${id}`);
};

// add medicine - POST
export const addMedicineAPI = async (reqBody, reqHeader) => {
  return await commonAPI(
    `POST`,
    `${serverURL}/add-medicine`,
    reqBody,
    reqHeader
  );
};
// update medicine - PUT
export const updateMedicineAPI = async (id, reqBody, reqHeader) => {
  return await commonAPI(
    `PUT`,
    `${serverURL}/update-medicine/${id}`,
    reqBody,
    reqHeader
  );
};

// delete medicine - DELETE
export const deleteMedicineAPI = async (id, reqHeader) => {
  return await commonAPI(
    `DELETE`,
    `${serverURL}/delete-medicine/${id}`,
    {},
    reqHeader
  );
};

// Pharamcy
// get all pharamcies - GET
export const getAllPharmaciesAPI = async () => {
  return await commonAPI(`GET`, `${serverURL}/all-pharmacies`);
};

// add pharmacy - POST
export const addPharmacyAPI = async (reqBody, reqHeader) => {
  return await commonAPI(
    `POST`,
    `${serverURL}/add-pharmacy`,
    reqBody,
    reqHeader
  );
};
// update pharmacy - PUT
// delete pharmacy - DELETE

// Products
// get all products - GET
// add product - POST
// update product - PUT
// delete product - DELETE

// USER PAGE//

// get frequent medicine details - GET

// get suggested products details for home page - GET

// get all suggested items - GET

// get pharmacies and filter based on location and medicine - GET

// get saved medicine and pharmacy for each user for saved page - GET

// post saved medicine and pharamcy for individual - POST

// get user details for profile page - GET

// update user details in profile page - PUT
