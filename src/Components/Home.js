import React from "react";
import HomeImg from "./Imagens/imageHome.png";
import * as S from "../Components/Style/Styles.js";
import HomeImgRes from "./Imagens/adoção.png";
const Home = () => {
  return (
    <>
      <S.BoxHome>
        <S.Imagem src={HomeImg} alt="" />
        <S.ImagemResp src={HomeImgRes} alt="" />
      </S.BoxHome>    
    </>
  );
};

export default Home;
