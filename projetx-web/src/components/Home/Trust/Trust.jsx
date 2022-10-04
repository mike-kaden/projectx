import React from "react";

import styled from "styled-components";

import { useTranslation } from "react-i18next";

import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "tOwjEOt1zYU",
      provider: "youtube",
    },
  ],
};

export default function Trust() {

  const { t } = useTranslation();

  return (
    <>
      <StyledTrust>
        <StyledHeadline>{t("Trust.trust")}</StyledHeadline>

        <StyledExpertise>
          <ul>
            <li>{t("Trust.experiences")}</li>
            <li>{t("Trust.channels")}</li>
            <li>{t("Trust.topics")}</li>
          </ul>
        </StyledExpertise>
        <StyledTestimonialVideo>
          <Plyr source={videoSrc} />
        </StyledTestimonialVideo>
      </StyledTrust>
    </>
  );
}

const StyledTrust = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--hullwhite);
  background-color: var(--schiefergrau);
`;

const StyledHeadline = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;

const StyledExpertise = styled.div`
  background-color: rgba(117,130,137,0.7);
  
`;

const StyledTestimonialVideo = styled.div`
  background-color: var(--lichtblau)
`;