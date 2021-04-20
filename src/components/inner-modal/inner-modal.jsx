import React, { Suspense } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  selectModalData,
  selectShowSecondModal,
} from "../../redux/selectors/modal.selectors";
import { closeModal } from "../../redux/actions/modal.actions";

import ClickOutside from "../click-outside";

import {
  OuterContainer,
  Container,
  CloseButton,
} from "./inner-modal.styles.js";

const Alerts = React.lazy(() => import("../alerts"));

const RequestItemModal = React.lazy(() =>
  import("./components/request-item-modal")
);

const WishlistSelectSizeModal = React.lazy(() =>
  import("../wishlist-select-size-modal")
);

const ShippingTerms = React.lazy(() => import("./components/shipping-terms"));

const ExtendedView = React.lazy(() => import("./components/extended-view"));

const ClientDataModal = React.lazy(() =>
  import("./components/client-data-modal")
);

const MODALS = {
  ALERTS: Alerts,
  SHIPPING_TERMS: ShippingTerms,
  REQUEST_ITEM: RequestItemModal,
  EXTENDED_VIEW: ExtendedView,
  WISHLIST_SELECT_SIZE: WishlistSelectSizeModal,
  CLIENT_DATA: ClientDataModal,
};

const InnerModal = () => {
  const dispatch = useDispatch();

  const modalData = useSelector(selectModalData, shallowEqual);
  const showSecondModal = useSelector(selectShowSecondModal, shallowEqual);
  const CurrentModal = MODALS[modalData.modalType];

  return (
    <OuterContainer>
      <ClickOutside
        action={() =>
          modalData.modalType !== "CLIENT_DATA"
            ? () => !showSecondModal && dispatch(closeModal())
            : null
        }
      >
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
