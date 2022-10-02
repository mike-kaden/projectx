import React from "react";

import styled from "styled-components";

import Copyright from "./Copyright/Copyright";
import Kontakt from "./Kontakt/Kontakt";

export default function Footer() {
  return (
    <>
      <StyledFooter>

        <Kontakt />

        <Copyright />

      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.div`
  margin-top: 2rem;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--hullwhite);
  background-color: var(--eigengrau);
`;
