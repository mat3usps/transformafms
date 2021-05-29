import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

import React from "react";

import StyledAppBar from "./components/StyledAppBar";
import Home from "./pages/Home";
import ClubedaPreta from "./pages/ClubeDaPreta";
import EmpreendeAi from "./pages/EmpreendeAi";
import Firgun from "./pages/Firgun";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2, 2, 4),
    maxWidth: "800px",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <StyledAppBar />
      <Container className={classes.container}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/clube-da-preta">
            <ClubedaPreta />
          </Route>
          <Route exact path="/empreende-ai">
            <EmpreendeAi />
          </Route>
          <Route exact path="/firgun">
            <Firgun />
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;
