import React from "react";

import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <header className="App-header">Header</header>;
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: raw;
  justify-content: center;
  align-items: center;

  color: var(--komatsgrau);
  background-color: var(--hellelfenbein);
`;


