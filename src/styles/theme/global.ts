import { createGlobalStyle } from'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input:focus {
        outline: none;
        box-shadow: 0 0 0 0.1rem ${(props) => props.theme.GRAY_SEPARATOR_HOVER};
    }

    body {
        background: ${(props) => props.theme.BG_WHITE};
        color: ${(props) => props.theme.GREY};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;

        outline: none;
        border: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
        background: transparent;
    }

    a {
        text-decoration: none;
    }
`