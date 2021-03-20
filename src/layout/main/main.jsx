import React, { Suspense } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { Container } from "./main.styles.js";

const HomePage = React.lazy(() => import("../../pages/homepage"));

const CollectionPage = React.lazy(() => import("../../pages/collection-page"));

const CollectionItemPage = React.lazy(() =>
  import("../../pages/collection-item-page")
);

const SearchPage = React.lazy(() => import("../../pages/search-page"));

const LoginPage = React.lazy(() => import("../../pages/user/login-page"));

const CheckOutLoginPage = React.lazy(() =>
  import("../../pages/check-out/check-out-login-page")
);

const CheckOutPage = React.lazy(() =>
  import("../../pages/check-out/check-out-page")
);

const RegisterPage = React.lazy(() =>
  import("../../pages/user/register-page/register-page")
);

const ResetPasswordPage = React.lazy(() =>
  import("../../pages/user/reset-password-page")
);

const UserPage = React.lazy(() => import("../../pages/user/user-page"));

const UserProfilePage = React.lazy(() =>
  import("../../pages/user/user-profile-page")
);

const UserWishlistPage = React.lazy(() =>
  import("../../pages/user/user-wishlist-page")
);

const UserPurchasesPage = React.lazy(() =>
  import("../../pages/user/user-purchases-page")
);

const WishlistPage = React.lazy(() => import("../../pages/wishlist-page"));

const Main = () => {
  const currentUser = useSelector(selectCurrentUser, shallowEqual);
  return (
    <Container>
      <Switch>
        <Suspense fallback={<div>...Is Loading</div>}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/:urlCollection" component={CollectionPage} />
          <Route
            exact
            path="/shop/:urlCollection/:urlSection"
            component={CollectionPage}
          />
          <Route
            exact
            path="/shop/:urlCollection/:urlSection/:urlReference"
            component={CollectionItemPage}
          />
          <Route exact path="/search" component={SearchPage} />
          <Route
            exact
            path="/login"
            render={() =>
              currentUser ? <Redirect to="/user" /> : <LoginPage />
            }
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
                <CheckOutLoginPage />
              )
            }
          />
          <Route
            exact
            path="/user"
            render={() => (!currentUser ? <Redirect to="/" /> : <UserPage />)}
          />
          <Route
            exact
            path="/user/profile"
            render={() =>
              !currentUser ? <Redirect to="/" /> : <UserProfilePage />
            }
          />
          <Route
            exact
            path="/user/my-purchases"
            render={() =>
              !currentUser ? <Redirect to="/" /> : <UserPurchasesPage />
            }
          />
          <Route
            exact
            path="/user/wishlist"
            render={() =>
              !currentUser ? <Redirect to="/" /> : <UserWishlistPage />
            }
          />
          <Route exact path="/checkout/shipping" component={CheckOutPage} />
          <Route exact path="/wishlist" component={WishlistPage} />
        </Suspense>
      </Switch>
    </Container>
  );
};

export default Main;
