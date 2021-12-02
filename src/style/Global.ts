import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: url('https://i.gifer.com/19Nx.gif');    ; // ${({ theme }) => theme.colors.background};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
