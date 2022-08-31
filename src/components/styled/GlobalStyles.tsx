import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font: ${({ theme }) => theme.fontWeights.light} ${({ theme }) =>
   theme.fontSizes.bodyLarge}/1.6 'Outfit', sans-serif;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.deepBlue};
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul,
ol {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
} `

export default GlobalStyles
