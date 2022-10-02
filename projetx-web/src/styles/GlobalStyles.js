import { createGlobalStyle } from "styled-components";

// the styled-components global styles object
// import in App.js and inserted as a Component
// applies every style defined in here to all elements (can still be overwritten)

// css improvements based on: https://github.com/AllThingsSmitty/css-protips
export const GlobalStyles = createGlobalStyle`

	.deactivated {
		opacity: 0.5 ;
	}

  :root {
    --shellgelb: #F5D100; //rgba(245,209,0,1)
    --signalblau: #0054A9; //rgba(0,84,169,1)
    --lichtblau: #37A1D4; //rgba(55,161,212,1)
    --taubenblau: #728EA1; //rgba(114,142,161,1)
    --hellelfenbein: #E3D3A8; //rgba(227,211,186,1)
    --komatsugrau: #2D2F31; //rgba(45,47,49,1)
    --eigengrau: #16161D; //rgba(22,22,29,1)
    --schiefergrau: #758289; //rgba(117,130,137,1)
    --telegrau: #878A8D; //rgba(135,138,141,1)
    --hullwhite: #D5DDDF; //rgba(213,221,223,1)
    --whiter: #fffff8; //rgba(255,255,248,1)
  }

  html{
    box-sizing: border-box;
    color: var(--base-dark);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    border: 0;
    padding: 0;
    -moz-box-sizing: inherit;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    height: 100%;
    margin: 0;
    font-family: -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 100;
	  font-size: calc(1vw + 1vh + .5vmin);
    color: var(--hullwhite);
    background-color: var(--taubenblau);


  }

  /* Display links when the <a> element has no text value but the href attribute has a link */
  a[href^="https"]:empty::before {
    content: attr(href);
  }

  /* Add a style for "default" links without a class attribute */
  a[href]:not([class]) {
    color: var(--whiter);
    text-decoration: underline;
  }

  h1, h2, h3 {
    font-weight: 400;
  }

  h4, h5, h6 {
    font-weight: 300;
    text-transform: uppercase;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.8em;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.3em;
  }

  h5 {
    font-size: 1.5em;
  }

  h6 {
    font-size: 1.2em;
  }

  button {
    all: unset;
  }

  button, html input[type="button"], input[type="reset"], input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer
  }

  ul {
    margin: 1rem;

  }
  
  ol {
    margin: 1rem;

  }

  li {
    padding-top: 0.5rem;
  }

  a:focus,
  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    box-shadow: none;
    outline: var (--telegrau) dotted 2px;
    outline-offset: .05em;
  }

  /* avoid mobile browsers from zooming in on HTML form elements */
  input[type="text"],
  input[type="number"],
  select,
  textarea {
    font-size: 16px;
    line-height: normal
  }

  textarea {
    overflow: auto
  }

  img {
    display: block;
    border: 0;
    height: auto;
    max-width: 100%;
    position: relative;
    image-rendering: -webkit-optimize-contrast;
    font-family: sans-serif;
    font-weight: 300;
    line-height: 2;
    text-align: center;
  }

  /* pseudo-elements rules to display a user message and URL reference of the broken image */
  img::before {
    content: "We're sorry, the image below is broken :(";
    display: block;
    margin-bottom: 1em;
  }

  img::after {
    content: "(url: " attr(src) ")";
    display: block;
    font-size: 1em;
  }

  svg:not(:root) {
    overflow: hidden
  }

  /* SVG icon-only buttons for sighted users and the SVG fails to load, this will help maintain accessibility */
  .no-svg .icon-only::after {
    content: attr(aria-label);
  }

  figure {
    margin: 0
  }

  @media (prefers-reduced-motion: reduce) {
    .animation {
      animation: none;
    }  }

`;