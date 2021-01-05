import { useEffect } from "react";
import { createPortal } from "react-dom";

const SecondModal = ({ children }) => {
  const modalRoot = document.getElementById("second-modal");
  const element = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(element);

    return () => {
      modalRoot.removeChild(element);
    };
  }, [element, modalRoot]);

  return createPortal(children, element);
};

export default SecondModal;
