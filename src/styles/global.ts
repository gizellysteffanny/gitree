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

  body, input, button {
    font-family: 'Poppins', sans-serif;
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
  }

  button {
    cursor: pointer;
  }

`;
