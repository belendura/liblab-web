import React, { useEffect, Fragment } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import "./styles/slick-theme.css";
import "./styles/slick.css";

// import { MEN_SCRUB_TOPS } from "./firebase/men-scrub-tops";
// import { MEN_SCRUB_JACKETS } from "./firebase/men-scrub-jackets";
// import { MEN_SCRUB_PANTS } from "./firebase/men-scrub-pants";
// import { UNISEX_FACE_MASKS } from "./firebase/unisex-face-masks";

// import { WOMEN_SCRUB_TOPS } from "./firebase/women-scrub-tops";
// import { WOMEN_SCRUB_JACKETS } from "./firebase/women-scrub-jackets";
// import { WOMEN_SCRUB_PANTS } from "./firebase/women-scrub-pants";

// import { WOMEN_JACKETS } from "./firebase/sizes";
// import { WOMEN_PANTS } from "./firebase/sizes";
// import { WOMEN_TOPS } from "./firebase/sizes";

// import { MEN_JACKETS } from "./firebase/sizes";
// import { MEN_PANTS } from "./firebase/sizes";
// import { MEN_TOPS } from "./firebase/sizes";

// import {
//   addNewDocuments,
//   updateCollectionsDocuments,
//   addSizesDocuments,
// } from "./firebase/firebase.utils";

import { getToken } from "./helpers/axiosTokens.helpers";

import { checkUserSession } from "./redux/actions/user.actions";
import { fetchShopMenuStart } from "./redux/actions/collections.actions";

import {
  selectShowModal,
  selectShowSecondModal,
} from "./redux/selectors/modal.selectors";

import Modal from "./components/modal";
import InnerModal from "./components/inner-modal";
import SecondModal from "./components/second-modal";
import SecondInnerModal from "./components/second-inner-modal";
import Ticker from "./layout/ticker";
import Header from "./layout/header";
import Main from "./layout/main";
import Footer from "./layout/footer";

import { GlobalStyle } from "./global.styles";

function App() {
  const dispatch = useDispatch();
  const showModal = useSelector(selectShowModal, shallowEqual);
  const showSecondModal = useSelector(selectShowSecondModal, shallowEqual);

  useEffect(() => {
    const token = getToken();
    token && dispatch(checkUserSession());
    console.log("token", token);
  }, []);

  useEffect(() => {
    dispatch(fetchShopMenuStart());
  }, []);

  // useEffect(() => {
  //   updateCollectionsDocuments("unisex", "faceMasks");
  // }, []);

  // useEffect(() => {
  //   updateCollectionsDocuments("men", "scrubTops");
  // }, []);

  // useEffect(() => {
  //   updateCollectionsDocuments("women", "scrubTops");
  // }, []);

  // useEffect(() => {
  //   addNewDocuments("collections/unisex/faceMasks", UNISEX_FACE_MASKS);
  // }, []);

  // useEffect(() => {
  //   addNewDocuments("collections/men/scrubTops", MEN_SCRUB_TOPS);
  // }, []);

  // useEffect(() => {
  //   addNewDocuments("collections/women/scrubTops", WOMEN_SCRUB_TOPS);
  // }, []);

  // useEffect(() => {
  //   addSizesDocuments("sizesGuide/men/scrubJackets", MEN_JACKETS);
  // }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <Ticker />
      <Header />
      <Main />
      <Footer />
      {showModal && (
        <Modal>
          <InnerModal />
        </Modal>
      )}
      {showSecondModal && (
        <SecondModal>
          <SecondInnerModal />
        </SecondModal>
      )}
    </Fragment>
  );
}

export default App;
