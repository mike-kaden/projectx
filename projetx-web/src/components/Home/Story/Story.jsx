import React from "react";

import styled from "styled-components";

import { useTranslation } from "react-i18next";

export default function Story() {

  const { t } = useTranslation();

  return (
    <>
      <StyledStory>

        <StyledHeadline>{t("Story.headline")}</StyledHeadline>
        test
        <StyledSlider>


        </StyledSlider>

      </StyledStory>
    </>
  );
}

const StyledStory = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  color: var(--komatsugrau);
  background-color: var(--telegrau);
`;

const StyledHeadline = styled.div`
  width: 45vw;
  padding: 1rem;
  margin-left: 10vw;

  line-height: 1.4rem;
  font-size: 1.4rem;
  font-weight: 500;
`;

const StyledSlider = styled.div`

  .carousel {
    height: 50vh;
  }
`;
