import React from "react";

import styled from "styled-components";

export default function Offer() {
  return (
    <>
      <StyledOffer>
        <StyledOfferHeader>Offer</StyledOfferHeader>
        <StyledVertriebsmanagement>
          Vetriebsmanagement
        </StyledVertriebsmanagement>
        <StyledProzessoptimierung>Prozessoptimierung</StyledProzessoptimierung>
        <StyledAbsatzsteigerung>Absatzsteigerung</StyledAbsatzsteigerung>
        <StyledMitarbeiterentwicklung>
          Mitarbeiterentwicklung
        </StyledMitarbeiterentwicklung>
        <StyledProfessionalisierung>
          Professsionalisierung ihrer Dienstleistungen
        </StyledProfessionalisierung>
        <StyledDatenanalyse>
          Datenanalyse
        </StyledDatenanalyse>
      </StyledOffer>
    </>
  );
}

const StyledOffer = styled.div`
  width: 100vw;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--hullwhite);
  background-color: var(--schiefergrau);
`;

const StyledOfferHeader = styled.div`
font-size: 1.4rem;
font-weight: 500;
`;

const StyledVertriebsmanagement = styled.div`
  width: 100vw;
  background-color: rgba(45, 47, 49, 0.4);
`;

const StyledProzessoptimierung = styled.div`
  width: 100vw;
  background-color: rgba(45, 47, 49, 0.6);
`;

const StyledAbsatzsteigerung = styled.div`
  width: 100vw;
  background-color: rgba(45, 47, 49, 0.2);
`;

const StyledMitarbeiterentwicklung = styled.div`
  width: 100vw;
  background-color: rgba(45, 47, 49, 0.4);
`;

const StyledProfessionalisierung = styled.div`
  width: 100vw;
  background-color: rgba(45, 47, 49, 0.6);
`;

const StyledDatenanalyse = styled.div`
  width: 100vw;
  background-color: rgba(45, 47, 49, 0.8);
`;