import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Montserrat:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${theme.fonts.main};
    font-size: 16px;
    line-height: 1.5;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: ${theme.fontSizes.xxlarge};
  }

  h2 {
    font-size: ${theme.fontSizes.xlarge};
  }

  h3 {
    font-size: ${theme.fontSizes.large};
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.medium};
  }

  .section {
    padding: ${theme.spacing.large} 0;
  }

  .gradient-bg {
    background: ${theme.colors.gradient};
  }

  .chart-gradient-bg {
    background: ${theme.colors.chartGradient};
  }

  .text-center {
    text-align: center;
  }

  .flex {
    display: flex;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .grid {
    display: grid;
  }

  .hidden {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;
