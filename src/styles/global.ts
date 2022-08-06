import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input:focus {
    outline: none;
  }

  body {
    background: ${props => props.theme.colors.background};
    font: 400 16px Roboto, sans-serif;
  }

  i {
    cursor: pointer;
  }

  .fa-angle-down {
    margin-left: 5px;
    margin-top: 20px;
    margin-bottom: auto;
    font-weight: 600;
  }

  .isActive {
    color: ${props => props.theme.colors.text};
    box-shadow: inset 0 -2px    ${props => props.theme.colors.primary};
  }

  .hide {
    display: none;
  }

  .show {
    display: '';
  }


 
`
