import React from "react";

import styled from "styled-components";

export default function Response() {
  return (
    <>
      <StyledResponse>
        <div>Response</div>
      </StyledResponse>
    </>
  );
}

const StyledResponse = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--komatsgrau);
  background-color: var(--shellgelb);
`;
