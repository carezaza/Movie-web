import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    button {
        border:none;
        outline:none;
        padding: 8px 10px;
        cursor: pointer;
        border-radius: 3px;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
