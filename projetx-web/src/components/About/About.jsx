import React from "react";

import styled from "styled-components";

import Company from "./Company/Company";
import Impressum from "./Impressum/Impressum";
import Datenschutz from "./Datenschutz/Datenschutz";
import Footer from "../Footer/Footer"

export default function About() {
  return (
    <>
      <StyledAbout>

        <Company />

        <Impressum />

        <Datenschutz />

      </StyledAbout>

      <Footer />
      
    </>  
  );
}

const StyledAbout = styled.div`
  margin-top: 1rem;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--hullwhite);
  background-color: var(--komatsugrau);
`;
