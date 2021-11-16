import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Noto+Sans+KR:wght@400;500;700&display=swap');
    * {
        font-family: 'Montserrat', sans-serif;
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: 0.03em;
    }
`;

export default GlobalStyle;
