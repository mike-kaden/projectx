import React from "react";

import styled from "styled-components";

import { useTranslation } from "react-i18next";

export default function Copyright() {

    const { t } = useTranslation();

    return (
      <StyledCopyright>
        &copy; 2022 project X consulting GmbH <br />
        {t("Footer.copyright")}
      </StyledCopyright>
    );
}

const StyledCopyright = styled.div`
    width: 100vw;
    min-height: 10vh;

    padding: 1rem;
    font-size: 0.7rem;
`;
