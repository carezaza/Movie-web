import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import GlobalStyle from "./GlobalStyle";
import Spinner from "./Components/Spinner";

const HomePage = lazy(() => import("./Containers/HomePage"));
const MoviePage = lazy(() => import("./Containers/MoviePage"));
const SearchPage = lazy(() => import("./Containers/SearchPage"));
const CategoryPage = lazy(() => import("./Containers/CategoryPage"));

const theme = createMuiTheme({
  colors: {
    design: {
      one: "#264653",
      two: "#2A9D8F",
      three: "#E9C46A",
      four: "#F4A261",
      five: "#E76F51",
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
          background: "#264653",
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
            <Route exact path="/movie/:id" component={MoviePage} />
            <Route
              exact
              path="/category/:id/:pageId?"
              component={CategoryPage}
            />
            <Route exact path="/search/:id/:pageId?" component={SearchPage} />
          </Suspense>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
