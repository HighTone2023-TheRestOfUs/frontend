import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    max-width:500px;
    height:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    /* font-family: "Gmarket Sans TTF"; */
    font-family: 'GmarketSansMedium';
    /* src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff'); */
    font-size:16px;
    font-weight: 700;
    color:${(props) => props.theme.fontColor};
`