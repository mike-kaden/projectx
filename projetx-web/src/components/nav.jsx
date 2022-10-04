import React from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import styled from "styled-components";
import { RiMailLine } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";
;

export default function Nav() {

  const MailLogo = RiMailLine;
  const CallLogo = RiPhoneFill;

  const { t, i18n } = useTranslation();

  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

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
      <StyledNav>
        <nav role="navigation" aria-label="Main">
          <ul>
            <li>
              <Link className="link" to="/about" aria-label="about Project X">
                {t("Nav.about")}
              </Link>
            </li>
            <li>
              {/* choose language container*/}
              <StyledTranslateSwitch>
                <button
                  aria-label="in deutsch"
                  onClick={() => TranslateClick("de-DE")}
                >
                  de
                </button>
                <button
                  aria-label="in english"
                  onClick={() => TranslateClick("en-US")}
                >
                  en
                </button>
              </StyledTranslateSwitch>
            </li>
            <li>
              <StyledLogos>
                <Mailto
                  email="mmueller@projectxconsulting.de"
                  subject="Hello Project X"
                  body="Let's connect"
                  className="mailto"
                >
                  <MailLogo
                    aria-label="send mail"
                    size={25}
                    className="colored"
                  />
                </Mailto>
                <Callme callnumber="00491741642535">
                  <CallLogo
                    aria-label="call"
                    size={25}
                    className="colored"
                  />
                </Callme>
              </StyledLogos>
            </li>
          </ul>
        </nav>
      </StyledNav>
    </>
  );
}

const StyledNav = styled.div`
  width: 50vw;
  margin-left: 50vw;

  pointer-events: auto;
  overflow: hidden;

  color: var(--hullwhite);
  background-color: var(--taubenblau);

  ul {
    margin: 0;
    list-style: none;

    display: flex;
    flex-direction: raw;
    justify-content: center;
  }

  li {
  
    padding: 1rem;
    text-align: center;
  }

  .link {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--hullwhite);
  }

  .colored {
    color: var(--hullwhite);
  }

  .false {
    opacity: 0.7;
  }
`;

const StyledLogos = styled.div`
  
 
`;

const StyledTranslateSwitch = styled.div`
 
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--wsignalblau);

  button {
    padding: 0.2rem;
  }
`;
