import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as C from "./Content.style"

import img1 from "../../../assets/result/마술사.png"

const Content = () => {
    const [result,setResult] = useState({
        title:"AppBTI를 분석중입니다",
        desc:"AppBTI를 분석중입니다"
    })

    const location = useLocation()
    const navigator = useNavigate()
    useLayoutEffect(() => {
        const state = location.state
        console.log(state)
        if (!state) navigator("/")
    },[])

    return (
        <C.Wrapper>
            <C.SubTitle>당신의 앱 사용 유형과 어울리는 직업은</C.SubTitle>
            <C.Title>{result.title}</C.Title>
            <C.Img src={img1}></C.Img>
            <C.Desc>해석 : {result.desc}</C.Desc>
        </C.Wrapper>
    );
};

export default Content;