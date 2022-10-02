import React from "react";

import styled from "styled-components";

export default function Problem() {
    return (
      <>
        <StyledProblem>
          <div>Problem</div>
        </StyledProblem>
      </>
    );
}

const StyledProblem = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--komatsgrau);
  background-color: var(--schiefergrau);
`;
