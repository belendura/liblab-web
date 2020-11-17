import React, { Suspense } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { selectModalData } from "../../redux/selectors/modal.selectors";
import { closeModal } from "../../redux/actions/modal.actions";

import ClickOutside from "../click-outside/click-outside.component";

import {
  OuterContainer,
  Container,
  CloseButton,
} from "./inner-modal.styles.js";

const Alerts = React.lazy(() => import("../alerts/alerts.component"));
const SizesGuideModal = React.lazy(() =>
  import("../sizes-guide/sizes-guide-modal/sizes-guide-modal.component")
);

const SelectSizeModal = React.lazy(() =>
  import("../select-size/select-size-modal/select-size-modal.component")
);

const ShippingInfo = React.lazy(() =>
  import("../shipping-info/shipping-info.component")
);

const MODALS = {
  ALERTS: Alerts,
  SIZES_GUIDE: SizesGuideModal,
  SHIPPING_INFO: ShippingInfo,
  SELECT_SIZE: SelectSizeModal,
};

const InnerModal = () => {
  const dispatch = useDispatch();

  const modalData = useSelector(selectModalData, shallowEqual);
  const CurrentModal = MODALS[modalData.modalType];

  return (
    <OuterContainer>
      <ClickOutside action={() => dispatch(closeModal())}>
        <Container>
          <CloseButton
            onClick={() => {
              dispatch(closeModal());
            }}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <CurrentModal {...modalData.modalProps} />
          </Suspense>
        </Container>
      </ClickOutside>
    </OuterContainer>
  );
};

export default InnerModal;