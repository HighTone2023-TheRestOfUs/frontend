import styled,{keyframes } from "styled-components";

export const Wrapper = styled.div`
    height:609px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    color:${(props) => props.theme.fontColor};
`

export const SubTitle = styled.h4`
    font-weight: 550;
    font-size: 15px;
`

export const Title = styled.h2`
    color:${(props) => props.theme.main};
`

export const Img = styled.img`
    width:300px;
    height:400px;
    object-fit:contain;
    border-radius:16px;
`

export const Desc = styled.div`
    width:80%;
    word-break:keep-all;
    color:#646464;
`

const myAni = keyframes`
0% {
    transform:rotate(0deg);
}
100%{
    transform:rotate(180deg);
}
`
export const Loading = styled.div`
    width:300px;
    height:400px;
    border-radius:16px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:3px solid gray;
    >img{
        width:60px;
        height:60px;
        animation: ${myAni} 1s infinite;
    }
`
