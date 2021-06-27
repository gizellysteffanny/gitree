import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #BFE0DC;
    -webkit-font-smoothing: antialiased;
  }

  body, input, select, button {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }

  #root {
    max-width: 1184px;
    margin: 0 auto;
    padding: 16px;
  }

  main {
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 16px 16px 16px rgba(0, 123, 103, 0.08);
    padding: 24px;
    height: calc(100vh - (16px * 2));
  }

  button {
    cursor: pointer;
  }

  .result-branch-name {
    margin-top: 32px;
  }

`;
