import React, { Suspense } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { selectModalData } from "../../redux/selectors/modal.selectors";
import { closeModal } from "../../redux/actions/modal.actions";

import ClickOutside from "../click-outside/click-outside.component";

import { OuterContainer, Container } from "./inner-modal.styles.js";

const SizeGuideModal = React.lazy(() =>
  import("../size-guide/size-guide-modal/size-guide-modal.component")
);

const MODALS = {
  SIZE_GUIDE_MODAL: SizeGuideModal,
};

const InnerModal = () => {
  const dispatch = useDispatch();

  const modalData = useSelector(selectModalData, shallowEqual);
  const CurrentModal = MODALS[modalData.modalType];

  return (
    <OuterContainer>
      <ClickOutside action={() => dispatch(closeModal())}>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <CurrentModal {...modalData.modalProps} />
          </Suspense>
        </Container>
      </ClickOutside>
    </OuterContainer>
  );
};

export default InnerModal;
