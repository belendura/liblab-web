import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRoot = document.getElementById("modal");
  const element = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(element);

    return () => {
      modalRoot.removeChild(element);
    };
  }, [element]);

  return createPortal(children, element);
};

export default Modal;
