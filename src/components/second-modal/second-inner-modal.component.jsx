import React, { Suspense } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { selectSecondModalData } from "../../redux/selectors/modal.selectors";
import { closeSecondModal } from "../../redux/actions/modal.actions";

import ClickOutside from "../click-outside/click-outside.component";

import {
  OuterContainer,
  Container,
  CloseButton,
} from "../second-modal/second-inner-modal.styles.js";


const WishlistSelectSizeModal = React.lazy(() =>
  import(
    "../wishlist/wishlist-select-size-modal/wishlist-select-size-modal.component"
  )
);
const SizesGuideModal = React.lazy(() =>
  import("../sizes-guide/sizes-guide-modal/sizes-guide-modal.component")
);
const MODALS = {
  WISHLIST_SELECT_SIZE: WishlistSelectSizeModal,
  SIZES_GUIDE:SizesGuideModal,
};

const SecondInnerModal = () => {
  const dispatch = useDispatch();

  const secondModalData = useSelector(selectSecondModalData, shallowEqual);
  const CurrentModal = MODALS[secondModalData.modalType];

  return (
    <OuterContainer>
      <ClickOutside action={() => dispatch(closeSecondModal())}>
        <Container>
          <CloseButton
            onClick={() => {
              dispatch(closeSecondModal());
            }}
          />
          <Suspense fallback={<div>Loading...</div>}>
             <CurrentModal {...secondModalData.modalProps} /> 
          </Suspense>
        </Container>
      </ClickOutside>
    </OuterContainer>
  );
};

export default SecondInnerModal;
