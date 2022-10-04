import React from "react";

import styled from "styled-components";

import Header from "./Header/Header";
import Nav from "../nav";

import Problem from "./Problem/Problem";
import Amplify from "./Amplify/Amplify";
import Story from "./Story/Story";
import Testimonial from "./Testimonial/Testimonial";
import Offer from "./Offer/Offer";
import Response from "./Response/Response";

import Footer from "../Footer/Footer"

export default function Home() {
  return (
    <>
      <StyledHome>
        <Header />
        <Nav />

        <Problem />
        <Amplify />
        <Story />
        <Testimonial />
        <Offer />
        <Response />

        <Footer />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--hullwhite);
  background-color: var(--taubenblau);
`;