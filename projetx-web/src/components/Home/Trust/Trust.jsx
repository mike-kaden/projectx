import React from "react";

import styled from "styled-components";

import { useTranslation } from "react-i18next";

export default function Trust() {

  const { t } = useTranslation();

  return (
    <>
      <StyledTrust>
        <StyledHeadline>Trust</StyledHeadline>

        <StyledExpertise>
          <ul>
            <li>{t("Trust.experiences")}</li>
            <li>{t("Trust.channels")}</li>
            <li>{t("Trust.topics")}</li>
          </ul>
        </StyledExpertise>
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

const StyledHeadline = styled`
  font-size: 1.4rem;
  font-weight: 500;
`;

const StyledExpertise = styled`
  background-color: rgba(117,130,137,0.7);
  
`;