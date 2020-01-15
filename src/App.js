import React from "react";
import Container from "./components/Container";
import Main from "./components/Main";
import { Provider } from "./contexts";

function App() {
  return (
    <Provider>
      <Container>
        <Main></Main>
      </Container>
    </Provider>
  );
}

export default App;
