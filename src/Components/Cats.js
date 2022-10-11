import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./Style/Styles.js";

const Cats = () => {
  const [cat, setCat] = useState([]);

  const API = "https://api.thecatapi.com/v1/images/search";

  useEffect(() => {
    axios
      .get(API)
      .then((resposta) => {
        setCat(resposta.data);
      })
      .catch((error) => {
        console.error("Desculpe aconteceu um erro na requisição!", error);
      });
  }, []);

  return (
    <S.BoxDog>
      {cat.map((item) => (
        <S.BoxFoto>
          <S.Foto src={item.url} alt="" />
        </S.BoxFoto>
      ))}
    </S.BoxDog>
  );
};
export default Cats;
