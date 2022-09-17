import { Global } from '@emotion/react'
import 'nprogress/nprogress.css'
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  html {
    scroll-behavior: smooth;
  }
  body {
    ${tw`antialiased font-pixel text-white`}
    ${tw`min-h-screen h-screen relative`}
  }
  #__next {
    ${tw`h-full relative flex flex-col`}
  }

  /* Progress Bar */
  #nprogress > .bar {
    ${tw`bg-white`}
  }
  #nprogress > .spinner {
    ${tw`hidden!`}
  }

  /* Fonts */
  @font-face {
    font-family: 'VT323 Regular';
    src: url('/fonts/VT323-Regular.woff2') format('woff2'),
      url('/fonts/VT323-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'TerminusTTF';
    src: url('/fonts/TerminusTTF.woff2') format('woff2'),
      url('/fonts/TerminusTTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'TerminusTTF';
    src: url('/fonts/TerminusTTF-Bold.woff2') format('woff2'),
      url('/fonts/TerminusTTF-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
