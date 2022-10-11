import React, { useState } from "react";
import axios from "axios";
import * as S from "./Style/Styles";

const Dogs = () => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const API = "https://dog.ceo/api/breeds/image/random";

  const DogsApi = () => {
    axios
      .get(API)
      .then((resposta) => {
        setData(resposta.data.message);
        console.log(data);
      })
      .catch((error) => {
        console.log("Desculpe aconteceu um erro na requisição", error);
      });
    setOpen(!open);
  };

  return (
    <S.BoxDog>
      <S.Subtitulo>Clique no botão para ver seu novo Amigão</S.Subtitulo>
      <S.BoxFoto>{open && <S.Foto src={data} alt="nome" />}</S.BoxFoto>
      <S.Button
        onClick={() => {
          DogsApi();
        }}
      >
        Clique aqui
      </S.Button>
    </S.BoxDog>
  );
};

export default Dogs;
