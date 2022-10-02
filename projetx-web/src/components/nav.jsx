import React from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import styled from "styled-components";
import { RiMailLine } from "react-icons/ri";

export default function Nav() {

  const MailLogo = RiMailLine;

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

  return (
    <>
      <StyledNav>
        <nav role="navigation" aria-label="Main">
          <ul>
            <li>
              <Link className="link" to="/" aria-label="home">
                {t("Nav.home")}
              </Link>
            </li>
            <li>
              <Link className="link" to="/about" aria-label="about Project X">
                {t("Nav.about")}
              </Link>
            </li>
          </ul>

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

          <StyledLogos>

            <Mailto
              email="mmueller@projectxconsulting.de"
              subject="Hello Project X"
              body="Let's connect"
              className="mailto"
            >
              <MailLogo aria-label="send mail" size={25} className="colored" />
            </Mailto>
          </StyledLogos>

        </nav>

      </StyledNav>
    </>
  );
}

const StyledNav = styled.div`
  width: 100vw;

 

  pointer-events: auto;
  overflow: hidden;

  color: var(--signalblau);
  background-color: var(--lichtblau);

  ul {
    margin: 0;
    list-style: none;

    display: flex;
    flex-direction: raw;

    justify-content: center;
  }

  li {
    margin: 0.5rem;
    padding: 2rem;
    text-align: center;
  }

  .link {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--signalblau);
  }

  .colored {
    color: var(--signalblau);
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
