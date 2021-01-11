import React, { Suspense } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { Container } from "./main.styles.js";

const HomePage = React.lazy(() =>
  import("../../pages/homepage/homepage.component")
);

const ShopPage = React.lazy(() =>
  import("../../pages/shop-page/shop-page.component")
);

const ShopPageCollection = React.lazy(() =>
  import(
    "../../pages/shop-page-collection/shop-page-collection.component"
  )
);

const ShopPageByCondition = React.lazy(() =>
  import("../../pages/shop-page-by-condition/shop-page-by-condition.component")
);

const ShopPageCollectionsByCondition = React.lazy(() =>
  import(
    "../../pages/shop-page-collections-by-condition/shop-page-collections-by-condition.component"
  )
);

const ShopItemPage = React.lazy(() =>
  import("../../pages/shop-item-page/shop-item-page.component")
);

const ShopItemPageByCondition = React.lazy(() =>
  import(
    "../../pages/shop-item-page-by-condition/shop-item-page-by-condition.component"
  )
);

const ShopItemPageCollectionsByCondition = React.lazy(() =>
  import(
    "../../pages/shop-item-page-collections-by-condition/shop-item-page-collections-by-condition.component"
  )
);

const SearchPage = React.lazy(() =>
  import("../../pages/search-page/search-page.component")
);

const LoginPage = React.lazy(() =>
  import("../../pages/user-page/login/login-page.component")
);

const CheckOutLoginPage = React.lazy(() =>
  import("../../pages/check-out-page/check-out-login/check-out-login-page.component")
);

const CheckOutPage = React.lazy(() =>
  import("../../pages/check-out-page/check-out/check-out-page.component")
);

const RegisterPage = React.lazy(() =>
  import("../../pages/user-page/register/register-page.component")
);

const ResetPasswordPage = React.lazy(() =>
  import("../../pages/user-page/reset-password/reset-password.component")
);

const UserPage = React.lazy(() =>
  import("../../pages/user-page/user/user-page.component")
);

const UserProfilePage = React.lazy(() =>
  import("../../pages/user-page/user/user-profile/user-profile-page.component")
);

const UserWishlistPage = React.lazy(() =>
  import("../../pages/user-page/user/user-wishlist/user-wishlist-page.component")
);

const UserPurchasesPage = React.lazy(() =>
  import("../../pages/user-page/user/user-purchases/user-purchases-page.component")
);

const WishlistPage = React.lazy(() =>
  import("../../pages/wishlist-page/wishlist-page.component")
);


const Main = () => {
  const currentUser = useSelector(selectCurrentUser, shallowEqual);
  return (
    <Container>
      <Switch>
        <Suspense fallback={<div>...Is Loading</div>}>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/shop/:collection"
            component={ShopPageCollection}
          />
           <Route
            exact
            path="/shop/featured/:condition"
            component={ShopPageCollectionsByCondition}
          />
        
          <Route
            exact
            path="/shop/:collection/featured/:condition"
            component={ShopPageByCondition}
          />
          <Route
            exact path="/shop/:collection/:section/:description&:reference/:color"
            component={ShopItemPage}
          />
          <Route
            exact
            path="/shop/:collection/featured/:condition/:description&:reference/:color"
            component={ShopItemPageByCondition}
          />
          <Route
            exact
            path="/shop/:condition/:description&:reference/:color"
            component={ShopItemPageCollectionsByCondition}
          />
          <Route exact path="/shop/:collection/:section" component={ShopPage} />   
          <Route exact path="/search" component={SearchPage} />
          <Route
            exact
            path="/login"
            render={() => (currentUser ? <Redirect to="/user" /> : <LoginPage />)}
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
          <Route exact path="/user" render={() =>
              !currentUser ? (
                <Redirect to="/" />
              
              ) : (
                <UserPage/>
              )
            } />
              <Route exact path="/user/profile"  render={() =>
              !currentUser ? (
                <Redirect to="/" />
              
              ) : (
                <UserProfilePage/>
              )
            } />
              <Route exact path="/user/my-purchases"  render={()=>!currentUser ? (
                <Redirect to="/" />
              
              ) : (
                <UserPurchasesPage/>
              )
            }  />
              <Route exact path="/user/wishlist"  render={()=>!currentUser ? (
                <Redirect to="/" />
              
              ) : (
                <UserWishlistPage/>
              )
            }   />
          <Route exact path="/checkout/shipping" component={CheckOutPage} />
          <Route exact path="/wishlist" component={WishlistPage} />
        </Suspense>
      </Switch>
    </Container>
  );
};

export default Main;
