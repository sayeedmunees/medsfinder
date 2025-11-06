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


// USER PAGE//

// get frequent medicine details - GET

// get suggested products details for home page - GET

// get all suggested items - GET

// get pharmacies and filter based on location and medicine - GET

// get saved medicine and pharmacy for each user for saved page - GET

// post saved medicine and pharamcy for individual - POST

// get user details for profile page - GET

// update user details in profile page - PUT


// ADMIN PAGE //

// Dashbaord
// get total medicines, pharamacy and products

// Medicine
// get all medicines - GET
// add medicine - POST
// update medicine - PUT
// delete medicine - DELETE

// Pharamcy
// get all pharamcies - GET
// add pharmacy - POST
// update pharmacy - PUT
// delete pharmacy - DELETE

// Products
// get all products - GET
// add product - POST
// update product - PUT
// delete product - DELETE
