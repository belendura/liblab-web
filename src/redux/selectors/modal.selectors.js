import { createSelector } from "reselect";

const selectModal = (state) => state.modal;

export const selectShowModal = createSelector(
  [selectModal],
  (modal) => modal && modal.showModal
);

export const selectShowSecondModal = createSelector(
  [selectModal],
  (modal) => modal && modal.showSecondModal
);

export const selectModalData = createSelector(
  [selectModal],
  (modal) => modal.modalData
);

export const selectSecondModalData = createSelector(
  [selectModal],
  (modal) => modal.secondModalData
);

export const selectModalType = createSelector(
  [selectModalData],
  (modalData) => modalData.modalType
);

export const selectModalProps = createSelector(
  [selectModalData],
  (modalData) => modalData.modalProps
);
