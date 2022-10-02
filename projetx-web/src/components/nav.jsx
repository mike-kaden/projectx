import React from "react";

import styled from "styled-components";

export default function Nav() {
    return (
      <>
        <StyledNav>
          <nav>Nav</nav>
        </StyledNav>
      </>
    );
}

const StyledNav = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--signalblau);
  background-color: var(--lichtblau);
`;
