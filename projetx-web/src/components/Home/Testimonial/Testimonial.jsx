import React from "react";

import styled from "styled-components";

export default function Testimonial() {
  return (
    <>
      <StyledTestimonial>
        <div>Trust</div>
      </StyledTestimonial>
    </>
  );
}

const StyledTestimonial = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--hullwhite);
  background-color: var(--schiefergrau);
`;
