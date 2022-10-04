import React from "react";

import styled from "styled-components";

import { RiMailLine } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";

import { useTranslation } from "react-i18next";

export default function Kontakt() {

    const MailLogo = RiMailLine;
    const CallLogo = RiPhoneFill;

    const { t } = useTranslation();

    const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
    };
    
    const Callme = ({ callnumber, children }) => {
      return <a href={`tel:${callnumber}`}>{children}</a>;
    };

    return (
        <>
            <StyledKontakt>
                project X consulting GmbH <br />
                Thiemannstrasse 36, 12059 Berlin, Germany
            </StyledKontakt>

            <StyledLogos>
                <Mailto
                    email="mmueller@projectxconsulting.de"
                    subject="Hello Project X"
                    body="Let's connect"
                    className="mailto"
                >
                    <MailLogo aria-label="send mail" size={15} className="colored" />
                </Mailto>
                    
                    
                <Callme
                        callnumber="00491741642535"
                >
                    <CallLogo aria-label="call" size={15} className="colored" />
                </Callme>
            </StyledLogos>
        </>
    );
}

const StyledKontakt = styled.div`
    width: 66vw;
    padding: 1rem;

    line-height: 1.2 rem;
    font-size: 0.7rem;
    font-weight: 400;
`;

const StyledLogos = styled.div`
  display: flex;
  flex-direction: raw;
  justify-content: center;
  gap: 1rem;
`;
