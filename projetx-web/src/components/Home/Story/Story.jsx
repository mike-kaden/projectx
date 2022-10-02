import React from "react";

import styled from "styled-components";

export default function Story() {
  return (
    <>
      <StyledStory>
        <div>Story</div>
      </StyledStory>
    </>
  );
}

const StyledStory = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--lichtblau);
  background-color: var(--telegrau);
`;
