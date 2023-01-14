import styled from "styled-components";

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
`

export const Desc = styled.div`
    color:#646464;
`