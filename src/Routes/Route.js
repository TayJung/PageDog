import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "../Components/Dogs.js";
import Cats from "../Components/Cats.js";
import Header from "./Header.js";
import Home from "../Components/Home.js";
import * as S from "../Components/Style/Styles.js";
export default function Router() {
  return (
    <BrowserRouter>
      <Header
        rota="Home"
        rota2="Adote um Cachorrinho"
        rota3="Adote um Gatinho"
      />
      <S.Titulo>Adote um Amigo!!</S.Titulo>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog" element={<Dogs />} />
        <Route path="/Cat" element={<Cats />} />
      </Routes>
    </BrowserRouter>
  );
}
