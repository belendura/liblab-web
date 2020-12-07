import React, { useEffect, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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

import { WOMEN_JACKETS } from "./firebase/sizes";
import { WOMEN_PANTS } from "./firebase/sizes";
import { WOMEN_TOPS } from "./firebase/sizes";

import {
  addNewDocuments,
  updateCollectionsDocuments,
  addSizesDocuments,
} from "./firebase/firebase.utils";

import { getToken } from "./helpers/axiosTokens.helpers";

import { checkUserSession } from "./redux/actions/user.actions";
import { fetchHeaderStart } from "./redux/actions/collections.actions";

import { selectCurrentUser } from "./redux/selectors/user.selectors";
import { selectShowModal } from "./redux/selectors/modal.selectors";

import Modal from "./components/modal/modal.component";
import InnerModal from "./components/modal/inner-modal.component";
import Ticker from "./components/ticker/ticker.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import { GlobalStyle } from "./global.styles";

const HomePage = React.lazy(() =>
  import("./pages/homepage/homepage.component")
);

const ShopPage = React.lazy(() =>
  import("./pages/shop-page/shop-page.component")
);

const ShopPageByCondition = React.lazy(() =>
  import("./pages/shop-page-by-condition/shop-page-by-condition.component")
);

const ShopItemPage = React.lazy(() =>
  import("./pages/shop-item-page/shop-item-page.component")
);
const SearchPage = React.lazy(() =>
  import("./pages/search-page/search-page.component")
);

const LoginPage = React.lazy(() =>
  import("./pages/user-page/login/login-page.component")
);

const CheckOutPage = React.lazy(() =>
  import("./pages/user-page/check-out/check-out-page.component")
);

const RegisterPage = React.lazy(() =>
  import("./pages/user-page/register/register-page.component")
);

const ResetPasswordPage = React.lazy(() =>
  import("./pages/user-page/reset-password/reset-password.component")
);

const UserPage = React.lazy(() =>
  import("./pages/user-page/user/user-page.component")
);

const WishlistPage = React.lazy(() =>
  import("./pages/wishlist-page/wishlist-page.component")
);

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser, shallowEqual);
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
  //   updateCollectionsDocuments("unisex", "face masks");
  // }, []);

  // useEffect(() => {
  //   updateCollectionsDocuments("men", "scrub jackets");
  // }, []);

  // useEffect(() => {
  //   updateCollectionsDocuments("women", "scrub jackets");
  // }, []);

  // useEffect(() => {
  //   addNewDocuments("collections/unisex/face masks", UNISEX_FACE_MASKS);
  // }, []);

  // useEffect(() => {
  //   addNewDocuments("collections/men/scrub tops", MEN_SCRUB_TOPS);
  // }, []);

  // useEffect(() => {
  //   addNewDocuments("collections/women/scrub tops", WOMEN_SCRUB_TOPS);
  // }, []);

  useEffect(() => {
    addSizesDocuments("sizes-guide/women/scrub jakects", WOMEN_JACKETS);
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Ticker />
      <Header />
      <Switch>
        <Suspense fallback={<div>...Is Loading</div>}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/:collection/:section" component={ShopPage} />
          <Route
            exact
            path="/shop/:collection/featured/:condition"
            component={ShopPageByCondition}
          />
          <Route
            path="/shop/:collection/:section/:description&:reference/:color"
            component={ShopItemPage}
          />
          <Route exact path="/search" component={SearchPage} />
          <Route
            exact
            path="/login"
            render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
          />
          <Route
            exact
            path="/register"
            render={() =>
              currentUser ? <Redirect to="/" /> : <RegisterPage />
            }
          />
          <Route
            exact
            path="/reset-password"
            render={() =>
              currentUser ? <Redirect to="/" /> : <ResetPasswordPage />
            }
          />
          <Route
            exact
            path="/checkout/login"
            render={() =>
              currentUser ? (
                <Redirect to="/checkout/shipping" />
              ) : (
                <CheckOutPage />
              )
            }
          />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/wishlist" component={WishlistPage} />
        </Suspense>
      </Switch>
      <Footer />
      {showModal && (
        <Modal>
          <InnerModal />
        </Modal>
      )}
    </div>
  );
}

export default App;
