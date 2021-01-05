import modalActionTypes from "../types/modal.types";

export const openModal = (modalType, modalProps) => ({
  type: modalActionTypes.OPEN_MODAL,
  payload: { modalType, modalProps },
});

export const closeModal = () => ({
  type: modalActionTypes.CLOSE_MODAL,
});

export const openSecondModal = (modalType, modalProps) => ({
  type: modalActionTypes.OPEN_SECOND_MODAL,
  payload: { modalType, modalProps },
});

export const closeSecondModal = () => ({
  type: modalActionTypes.CLOSE_SECOND_MODAL,
});
