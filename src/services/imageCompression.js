import imageCompression from 'browser-image-compression';

/**
 * Compresses an image file to a target size in KB.
 * @param {File} file - The image file to compress.
 * @param {number} maxSizeKB - The target maximum size in KB.
 * @returns {Promise<File>} - The compressed file.
 */
export const compressImage = async (file, maxSizeMB) => {
  const options = {
    maxSizeMB: maxSizeMB / 1024,
    useWebWorker: true,
    fileType: 'image/webp', // Default to webp for better compression
  };
  
  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error("Image compression error:", error);
    return file; // Return original if compression fails
  }
};

export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
