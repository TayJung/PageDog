import React, { useState } from "react";
import * as S from "../Components/Style/Styles.js";
import Logo from "../Components/Imagens/logoBestFriend.png";

const Header = ({ rota, rota2, rota3 }) => {
  const [open, setOpen] = useState(false);

  const Menu = () => {
    return (
      <S.Nav>
        <S.List>
          <S.Li>x</S.Li>
          <S.Li>
            <S.Menu to="/">{rota}</S.Menu>
          </S.Li>
          <S.Li>
            <S.Menu to="/dog">{rota2}</S.Menu>
          </S.Li>
          <S.Li>
            <S.Menu to="/cat">{rota3}</S.Menu>
          </S.Li>
        </S.List>
      </S.Nav>
    );
  };

  return (
    <S.Navegação>
      <S.Logo src={Logo} />
      <S.BtnHeader
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open === true ? "x" : "Menu"}
        {open && Menu()}
      </S.BtnHeader>
    </S.Navegação>
  );
};

export default Header;
