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
import { fetchHeaderStart } from "./redux/actions/collections.actions";

import { selectShowModal } from "./redux/selectors/modal.selectors";

import Modal from "./components/modal/modal.component";
import InnerModal from "./components/modal/inner-modal.component";
import Ticker from "./layout/ticker/ticker.component";
import Header from "./layout/header/header.component";
import Main from "./layout/main/main.component";
import Footer from "./layout/footer/footer.component";

import { GlobalStyle } from "./global.styles";

function App() {
  const dispatch = useDispatch();
  const showModal = useSelector(selectShowModal, shallowEqual);

  useEffect(() => {
    const token = getToken();
    token && dispatch(checkUserSession());
    console.log("token", token);
  }, []);

  useEffect(() => {
    dispatch(fetchHeaderStart());
  }, []);

  // useEffect(() => {
  //   updateCollectionsDocuments("unisex", "faceMasks");
  // }, []);

  // useEffect(() => {
  //   updateCollectionsDocuments("men", "scrubJackets");
  // }, []);

  // useEffect(() => {
  //   updateCollectionsDocuments("women", "scrubJackets");
  // }, []);

  // useEffect(() => {
  //   addNewDocuments("collections/unisex/faceMasks", UNISEX_FACE_MASKS);
  // }, []);

  // useEffect(() => {
  //   addNewDocuments("collections/men/scrubJackets", MEN_SCRUB_JACKETS);
  // }, []);

  // useEffect(() => {
  //   addNewDocuments("collections/women/scrubJackets", WOMEN_SCRUB_JACKETS);
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
    </Fragment>
  );
}

export default App;
