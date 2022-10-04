import React from "react";

import styled from "styled-components";

import { useTranslation } from "react-i18next";

export default function Header() {

  const { t } = useTranslation();

  return (
    <>
      <StyledHeader>
        <header className="App-header">{t("Header.slogan")}</header>
        <StyledSlogan>Faster. Better!</StyledSlogan>
      </StyledHeader>
      <StyledCompany>{t("Header.company")}</StyledCompany>
    </>
  );
}

const StyledHeader = styled.div`
  width: 100vw;
  min-height: 20vh;

  display: flex;
  flex-direction: raw;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  color: var(--komatsgrau);
  background-color: rgba(45,47,49,0.4);

  .App-header {
    with: 50vw;
    padding: 1rem;
    line-height: 1.3rem;

    font-size: 1.3rem;
    font-weight: 600;
    color: var(--shellgelb);
  }
`;

const StyledSlogan = styled.div`
  width: 30vw;
  padding: 1rem;

  line-height: 1.4rem;
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--shellgelb);
`;

const StyledCompany = styled.div`
  width: 100vw;
  padding: 1rem;
  text-align: right;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--hullwhite);
`;


