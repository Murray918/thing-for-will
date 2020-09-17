import React from "react";
import "./App.css";
import FightsByWinMethod from "./Pages/FightsByWinMethod";
import { Container, Paper } from "@material-ui/core";
import { Navigation } from "./Components";

function App() {
  return (
    // <Paper>
    <div>
      <Navigation />
      <Container>
        <FightsByWinMethod />
      </Container>
    </div>
    // </Paper>
  );
}

export default App;
