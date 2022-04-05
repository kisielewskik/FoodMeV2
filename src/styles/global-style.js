import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme: { color } }) => color.grey500};
    overflow-x: hidden;
    overscroll-behavior: none;
    color: ${({ theme }) => theme.color.black100};
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }

  a {
    transition: .5s;
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
  }`;
