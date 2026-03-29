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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-in fade-in duration-300">
      <div className="bg-card border border-border w-[90%] max-w-md p-8 shadow rounded-2xl animate-in zoom-in-95 duration-200 transition-colors">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-foreground ">{title}</h3>
          <button
            onClick={onClose}
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
          >
            <IoMdClose />
          </button>
        </div>

        <p className="text-muted-foreground mb-8 text-base">{message}</p>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-muted hover:bg-border/60 text-foreground font-bold py-2 px-4 rounded-lg mr-2 transition-colors"
            type="button"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`font-bold py-2 px-4 rounded-lg text-primary-foreground transition-colors ${
              type === "danger"
                ? "bg-destructive hover:bg-destructive/90"
                : "bg-primary hover:bg-primary/90"
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
