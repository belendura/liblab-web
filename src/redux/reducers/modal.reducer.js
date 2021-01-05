import modalActionTypes from "../types/modal.types";

const INITIAL_STATE = {
  showModal: false,
  showSecondModal:false,
  modalData: {
    modalType: "",
    modalProps: null,
  },
  secondModalData: {
    modalType: "",
    modalProps: null,
  },
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modalActionTypes.OPEN_MODAL:
      return {
        ...state,
        showModal: true,
        modalData: action.payload,
      };
    case modalActionTypes.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        modalData: {
          modalType: "",
          modalProps: null,
      }}
    case modalActionTypes.OPEN_SECOND_MODAL:
        return {
          ...state,
          showSecondModal: true,
          secondModalData: action.payload,
        };
    case modalActionTypes.CLOSE_SECOND_MODAL:
        return {
          ...state,
          showSecondModal: false,
          secondModalData: {
            modalType: "",
            modalProps: null,
        }}
    default:
      return state;
  }
};

export default modalReducer;
