import Styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,700&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        
    }
    
`;

// ESTILIZAÇÃO BODY
export const Container = Styled.body`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;  
 
  background-image:linear-gradient(45deg, #DCBCB3 0%, #FFF6F0 85%, #FDFFF8 100%);
`;

//ESTILIZAÇÃO DA HEADER

export const Logo = Styled.img`
width:8%;
height:12vh;
@media only screen and (min-width: 320px) and (max-width: 500px){
  width:25%;
  height:10vh;
}
`;

export const Navegação = Styled.div`
width:100%;
height:13vh;
background:#008B8B;
display: flex;
justify-content:space-around;
align-items: center;

`;
export const List = Styled.ul`
display:flex;
flex-direction:column;  
align-items: start;
justify-content:space-evenly;
width:100%;
height:20vh;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:100%;
  height:100%;
  justify-content:space-around;  
}
`;

export const Nav = Styled.nav`
display:flex;
flex-direction:column;
justify-content:center;
align-items:left;
text-align:left;
width:27.5vw;
height:25vh;
background:#008B8B;
font-size:0.4em;
border-radius:0.4em;
position:relative;
top:5vh;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:23vw;
}
`;

export const BtnHeader = Styled.button`
background:#008B8B;
color:#F1DFD7;
width:6vw;
font-weight:700;
font-size:1.5em;
border:none;
cursor:pointer;
&:hover{
      color:#CD5C5C;
      font-size:1.7em;
    }
    @media only screen and (min-width: 320px) and (max-width: 800px){
      font-size:1em;
      &hover{
        font-size:1.1em;
      }
    }
`;

export const Li = Styled.li`
  display:flex;
  align-items:center;
  width:100%;
  color:#fff;
  height:6vh;
  padding-left:1em;
  ont-size:1.2em;
  &:hover{
    background:#CD5C5C;
    font-size:1.3em;
  }
  @media only screen and (min-width: 320px) and (max-width: 800px){
      font-size:0.9em;
      &hover{
        font-size:1em;  
      }
    
`;

export const Menu = Styled(Link)`    
    text-decoration:none;
    color:#fff;
    font-size:1.2em;
    font-weight:500;
    text-align:left;
    font-family: 'Poppins', sans-serif;
    text-shadow: 5px 4px 6px rgba(0,0,0,0.6);
    &:hover{
      color:#F1DFD7;
      font-size:1.3em;   
    }
    @media only screen and (min-width: 320px) and (max-width: 800px){
      font-size:0.9em;
      &hover{
        font-size:1em;  
      }
    
   
}
`;

//estilização o Router

export const Titulo = Styled.h1`
  color:#CD5C5C;
  padding-top:1em;
  width:100%;
  height: 10vh;
  display:flex;
  justify-content:center;
  align-items: center;
  font-size:2.5em;
  font-weight:600;
  font-family: 'Poppins', sans-serif;
  
  @media only screen and (min-width: 320px) and (max-width: 800px){
    font-size:2em;
  }
`;

//ESTILIZAÇÃO DA HOME

export const BoxHome = Styled.figure`
 display:flex;
 justify-content:center;
 align-items: center;
 height:83vh;
 
`;

export const Imagem = Styled.img`
width:58vw;
border-radius:1em;
border: solid #8B4726 2px;
box-shadow: 5px 5px 15px 5px rgba(35,35,35,0.92);
@media only screen and (min-width: 320px) and (max-width: 500px){
  display:none;
}
`;

export const ImagemResp = Styled.img`
display:none;
@media only screen and (min-width: 320px) and (max-width: 500px){
  display:initial;
  width:80vw;
  height:60vh;
  border: solid #8B4726 2px;
  border-radius:1em;
  box-shadow: 5px 5px 15px 5px rgba(35,35,35,0.92);
}

`;

//ESTILIZAÇÃO DA DOGS

export const Foto = Styled.img`
  width:100%;
  height:39vh;
  border-radius:1em;
  @media only screen and (min-width: 320px) and (max-width: 800px){
      width:100%;
      height:29.5vh;
    }
`;

export const Subtitulo = Styled.h2`
  color:#D2691E;
  display:flex;
  justify-content:center;
  align-items: center;
  font-size:1.5em;
  font-weight:600;
  font-family: 'Poppins', sans-serif;
  @media only screen and (min-width: 320px) and (max-width: 800px){
    font-size:1em;
    text-align:center;
     
  }
`;

export const BoxFoto = Styled.figure`
width:30%;
height:40vh;
border: solid #8B4726 2px;
box-shadow: 5px 5px 15px 5px rgba(35,35,35,0.92);
border-radius:1em;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:65%;
height:30vh;
}
`;

export const BoxDog = Styled.section`
width:100%;
height:76vh;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items: center;
`;

export const Button = Styled.button`
Color:#fff;
background:#A52A2A;
border-radius:1em;
width:10vw;;
height:7vh;
cursor:pointer;
border:none;
font-size:1em;
font-weight:600;
font-family: 'Poppins', sans-serif;
box-shadow: 1px 2px 31px 15px rgba(165,42,42,0.88);
&:hover{
  transform: scale(1.1) translate(1px, -5px);
}
@media only screen and (min-width: 320px) and (max-width: 800px){
      width:30vw;
      height:8vh;
    }

`;
