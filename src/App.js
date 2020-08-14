import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Containers/HomePage";
import MoviePage from "./Containers/MoviePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import GlobalStyle from "./GlobalStyle";

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
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:id" component={MoviePage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
