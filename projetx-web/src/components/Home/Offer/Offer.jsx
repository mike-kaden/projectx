import React from "react";

import styled from "styled-components";

export default function Offer() {
  return (
    <>
      <StyledOffer>
        <div>Offer</div>
      </StyledOffer>
    </>
  );
}

const StyledOffer = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--komatsgrau);
  background-color: var(--schiefergrau);
`;
