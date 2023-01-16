import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as C from "./Content.style"

import axios from "axios"

import loading from "../../../assets/result/loading.svg"

import img1 from "../../../assets/result/바리스타1.png"
import img2 from "../../../assets/result/의사2.png"
import img3 from "../../../assets/result/환자3.png"
import img4 from "../../../assets/result/소믈리에4.png"
import img5 from "../../../assets/result/마술사5.png"
import img6 from "../../../assets/result/댄서6.png"
import img7 from "../../../assets/result/알바7.png"
import img8 from "../../../assets/result/코스플레이어8.png"


import resultTable from '../resultTable';

const Content = () => {
    const [result,setResult] = useState({
        title:"AppBTI를 분석중입니다",
        desc:"AppBTI를 분석중입니다",
        isLoaded:false,
        imgSrc:loading,
    })

    const location = useLocation()
    const navigator = useNavigate()
    useLayoutEffect(() => {
        const state = location.state
        if (!state) navigator("/")
        else {
            const selectList = state.selectList



            const resultValue = {
                simple:0,
                people:0,
                function:0,
            }

            axios.post("http://localhost:8000/api/stats/add",{
                    arr:selectList
                })

            selectList.forEach((e:number,idx:number) => {
                // 3은 포함 하지 않는다
                if (e === 3) return
                resultValue.simple += resultTable.high[e].simple
                resultValue.people += resultTable.high[e].people
                resultValue.function += resultTable.high[e].function
            })

            if (resultValue.simple > 0){
                if (resultValue.people > 0){
                    if (resultValue.function > 0){
                        makeResult("프렌차이즈 카페 바리스타",img1,"많은 사람들이 사용하고 깔끔한 디자인을 선호하는, 감성있는 바리스타")
                    }else {
                        makeResult("강남미인 제조기 성형외과 의사",img2,"깔끔하고 심플하지만 기능도 추구하는 실용적인 사람이군요!")
                    }
                }else {
                    if (resultValue.function > 0){
                        makeResult("유별난 결벽증 환자",img3,"지저분한 모습을 볼 수 없는 미니멀리스트시군요!")
                    }else {
                        makeResult("워터 소믈리에",img4,"나의 앱을 분석 후 사용하는 합리적인 스타일이시군요!")
                    }
                }
            } else {
                if (resultValue.people > 0){
                    if (resultValue.function > 0){
                        makeResult("응애 나 초보 마술사",img5,"예쁘고 감성있는 앱을 좋아하시군요!")
                    }else {
                        makeResult("잘 봐 언니들 싸움이다! 스트릿 댄서",img6,"이쁘고 대중적인 앱을 좋아하시군요!")
                    }
                }else {
                    if (resultValue.function > 0){
                        makeResult("최저시급 민속촌 사물놀이 알바",img7,"좋은 앱을 발굴해서 사용하시는군요!")
                    }else {
                        makeResult("귀멸의 칼날 코스플레이어",img8,"좋은 앱을 나만 사용하는 홍머병 스타일이시군요!")
                    }
                }
            }

        }
    },[])

    function makeResult(
        title:string,
        imgSrc:string,
        desc:string,
    ){
        setResult({
            title,
            desc,
            isLoaded:true,
            imgSrc
        })
        // isLoaded
    }


    return (
        <C.Wrapper>
            <C.SubTitle>당신의 앱 사용 유형과 어울리는 직업은</C.SubTitle>
            <C.Title>{result.title}</C.Title>
            {
                result.isLoaded ? 
                <C.Img src={result.imgSrc}></C.Img> :
                <C.Loading>
                    <img src={loading} alt="로딩중" />
                </C.Loading>
            }
            <C.Desc>해석 : {result.desc}</C.Desc>
        </C.Wrapper>
    );
};

export default Content;