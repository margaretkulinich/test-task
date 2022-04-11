import React from "react";
import Header from "../components/Header";
import { createGlobalStyle } from "styled-components";
import { CardList } from "../components/CardList/CardList";

const GlobalStyle = createGlobalStyle`
html, body, #root, #root > div {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header>E-Scooter Emporium</Header>
      <CardList />
    </>
  );
}
