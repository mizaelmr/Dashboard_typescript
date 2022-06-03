import { ContextGlobal } from "./context/global";
import GlobalStyle from "./theme/globalStyles";
import React from "react";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <ContextGlobal>
        <Routes />
      </ContextGlobal>
    </>
  );
}

export default App;
