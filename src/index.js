import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./css/App.css";
import App from "./App";
import TerminalX from "./components/terminal";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

ReactDOM.render(
  <>
    <App />
    <AppContainer>
      <TerminalX />
    </AppContainer>
  </>,
  document.getElementById("root")
);
