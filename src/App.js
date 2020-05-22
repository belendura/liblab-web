import React, { useEffect, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getToken } from "./helpers/axiosTokens.helpers";

import { checkUserSession } from "../src/redux/actions/user.actions";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import { GlobalStyle } from "./global.styles";

const HomePage = React.lazy(() =>
  import("./pages/homepage/homepage.component")
);
const ShopPage = React.lazy(() =>
  import("./pages/shop-page/shop-page.component")
);
const SearchPage = React.lazy(() =>
  import("./pages/search-page/search-page.component")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();
    token && dispatch(checkUserSession());
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
          <Suspense fallback={<div>...Is Loading</div>}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/search" component={SearchPage} />
          </Suspense>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
