import styled from "styled-components";

interface ButtonType{
    backgroundColor?:string;
    borderColor?:string;
    fontColor?:string;
}

export const Wrapper = styled.button<ButtonType>`
    height:52px;
    width:80%;
    max-width:335px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${(props) => props.backgroundColor ?? props.theme.mainColor};
    border:${(props) => props.borderColor ?? props.theme.mainColor} solid 3px; 
    color:${(props) => props.fontColor ?? "white"};
    border-radius:12px;
    font-size:16px;
    font-weight:700;
    :disabled{
        filter:grayscale(80%);
    }
`

