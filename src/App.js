import React, { useEffect, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, shallowEqual, useSelector } from "react-redux";

// import { SCRUBS } from "./firebase/scrubs";
// import { addNewDocuments } from "./firebase/firebase.utils";

import { getToken } from "./helpers/axiosTokens.helpers";

import { checkUserSession } from "./redux/actions/user.actions";
import { selectCurrentUser } from "./redux/selectors/user.selectors";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import { GlobalStyle } from "./global.styles";

const HomePage = React.lazy(() =>
  import("./pages/homepage/homepage.component")
);
const ShopPage = React.lazy(() =>
  import("./pages/shop-page/shop-page.component")
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

  useEffect(() => {
    const token = getToken();
    token && dispatch(checkUserSession());
    console.log("token", token);
  }, []);

  // useEffect(() => {
  //   addNewDocuments("collections/unisex/scrubs", SCRUBS);
  // }, []);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<div>...Is Loading</div>}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/:collection/:section" component={ShopPage} />
          <Route
            path="/shop/:collection/:section/:name-:reference/:color"
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
    </div>
  );
}

export default App;
