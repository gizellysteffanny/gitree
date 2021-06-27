import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: #818c8f;
        border-radius: 2px;
    }

    &::-webkit-scrollbar-track {
        background: #ffffff;
        border-radius: 2px;
    }
  }

  body {
    background-color: #BFE0DC;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, select, button {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }

  #root {
    max-width: 1184px;
    margin: 0 auto;
    padding: 72px;
  }
`;
