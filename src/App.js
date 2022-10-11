import React from "react";
import Router from "./Routes/Route";
import * as S from "./Components/Style/Styles";
const App = () => {
  return (
    <S.Container>
      <S.GlobalStyle />
      <Router />
    </S.Container>
  );
};

export default App;
