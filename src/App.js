import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import GlobalStyle from "./GlobalStyle";
import Spinner from "./Components/Spinner";
import { Button } from "@material-ui/core";

const HomePage = lazy(() => import("./Containers/HomePage"));
const MoviePage = lazy(() => import("./Containers/MoviePage"));
const SearchPage = lazy(() => import("./Containers/SearchPage"));
const CategoryPage = lazy(() => import("./Containers/CategoryPage"));
const CheckOutPage = lazy(() => import("./Containers/CheckOutPage"));
const LoginPage = lazy(() => import("./Containers/LoginPage"));

const theme = createMuiTheme({
  colors: {
    design: {
      one: "#E5E5E5",
    },
    status: {
      danger: "#bb2124",
      success: "#22bb33",
      warning: "#f0ad4e",
      info: "#5bc0de",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          background: "#E5E5E5",
          minHeight: "100vh",
          overflowX: "hidden",
          paddingBottom: 100,
        }}
      >
        <GlobalStyle />
        <Header />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/checkout" component={CheckOutPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/movie/:id" component={MoviePage} />
            <Route
              exact
              path="/category/:id/:pageId?"
              component={CategoryPage}
            />
            <Route exact path="/search/:id/:pageId?" component={SearchPage} />
          </Suspense>
        </Switch>
        <a
          href="https://docs.google.com/document/d/1REy9xLV8tHF-x3pZEVHsck7b2rX_VHyZ9uJ_FRoY9KM/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button style={{ position: "fixed", bottom: 0, right: 0 }}>
            Details
          </Button>
        </a>
      </div>
    </ThemeProvider>
  );
}

export default App;
