import { serverURL } from "./serverURL";

/**
 * Normalizes an image source for the UI.
 * If the path starts with http, it returns it as-is (Cloudinary/External).
 * Otherwise, it appends the local server upload path.
 */
export const getImagePath = (imagePath) => {
  if (!imagePath) return "";
  
  if (imagePath.startsWith("http")) {
    return imagePath;
  }
  
  return `${serverURL}/upload/${imagePath}`;
};
