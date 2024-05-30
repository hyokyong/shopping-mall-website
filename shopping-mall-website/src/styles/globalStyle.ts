import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { fontFaces } from './const/font';

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fontFaces}

    #root {
      font-family: NotoSansKR;
    }
    * {
        box-sizing: border-box;
    }

    body,
    p,
    h1, 
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    ol,
    li,
    dl,
    dt,
    dd,
    table,
    th,
    td,
    form,
    fieldset,
    legend,
    input,
    textarea,
    button,
    article,
    aside,
    canvas,
    details,
    figcaption,
    figure,
    footer,
    header,
    menu,
    nav,
    section,
    audio,
    video,
    blockquote {
      margin: 0;
      padding: 0;
    }

    header,
    section,
    footer,
    aside,
    nav,
    main,
    article,
    figure {
      display: block;
    }

    body,
    input,
    textarea,
    select,
    table,
    button,
    code {
      font-size: 16px;
      line-height: 1.25;
    }

    body {
      min-width: 1050px;
      overflow: hidden ;
      position: relative;
      background-color: #ffffff;
      word-wrap: break-word;
      word-break: keep-all;
      -webkit-text-size-adjust: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      @media screen and (max-width: 767px){
        min-width: auto;
      }
    }

    img,
    fieldset {
      border: 0;
    }

    img {
      vertical-align: top;
    }

    em,
    address,
    cite,
    dfn {
      font-style: normal;
    }

    abbr {
      text-decoration: none;
    }

    a,
    label,
    button,
    input[type='checkbox'],
    input[type='radio'] {
      color: inherit;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(26, 26, 26, 0.301961);
    }

    table {
      border-collapse: collapse;
    }

    hr {
      border: 0;
      margin: 0;
      padding: 0;
    }

    textarea {
      overflow: auto;
      border: 1px solid #bcbcbc;
      resize: none;
      -webkit-overflow-scrolling: touch;
    }

    input, textarea {
      outline: none;
      border: none;
      background-color: transparent;
    }

    button {
      overflow: visible;
      border: none;
      background: none;
      cursor: pointer;
      -webkit-user-select: none;
    }

    button[disabled],
    button.disabled {
      cursor: default;
    }

    button,
    [role='button'] {
      cursor: pointer;
    }

    input[type='image'],
    input[type='text'],
    input[type='submit'],
    input[type='password'] {
      border-radius: 0;
    }

    input[type='text']::-ms-clear {
      display: none;
    }

    input[type='password']::-ms-reveal {
      display: none;
    }

    input::-webkit-inner-spin-button {
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
    }
    
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-text-fill-color: #5e5e60;
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
    }

    b {
      font-weight: bold;
    }

    * {
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background: white;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 3.5px;
        background-color: gray;

        &:hover {
          background-color: gray;
        }
      }
      &::-webkit-scrollbar-track {
        background: white;
      }
    }
`;

export default GlobalStyle;
