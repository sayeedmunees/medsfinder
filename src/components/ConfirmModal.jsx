import React from "react";
import { IoMdClose } from "react-icons/io";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "danger",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-in fade-in duration-200">
      <div className="bg-white border w-[90%] max-w-md p-8 shadow rounded-2xl animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 ">{title}</h3>
          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-800 transition-colors"
          >
            <IoMdClose />
          </button>
        </div>

        <p className="text-gray-600 mb-8 text-base">{message}</p>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-2 transition-colors"
            type="button"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`font-bold py-2 px-4 rounded-lg text-white transition-colors ${
              type === "danger"
                ? "bg-red-500 hover:bg-red-600"
                : "bg-teal-500 hover:bg-teal-600"
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
