import React, { useEffect, useState } from "react";
import Choices from "../components/choices/Choices";
import Item from "../components/item/Item";
import Phone from "../assets/phone.png";
import KakaoImg from "../assets/kakao.png";
import TossImg from "../assets/toss.png";
import Insta from "../assets/insta.png";
import FacebookImg from "../assets/facebook.png";
import NaverWebtoonImg from "../assets/naverWebtoon.png";
import KakaoWebtoonImg from "../assets/kakaoWebtoon.png";
import MusinsaImg from "../assets/musinsa.png";
import ZigzagImg from "../assets/zigzag.png";
import styled from "styled-components";

const array = [
  {
    title: "내가 더 선호하는 금융 앱은?",
    leftImg: KakaoImg,
    rightImg: TossImg,
  },
  {
    title: "내가 더 선호하는 SNS 앱은?",
    leftImg: Insta,
    rightImg: FacebookImg,
  },
  {
    title: "내가 더 선호하는 웹툰 앱은?",
    leftImg: NaverWebtoonImg,
    rightImg: KakaoWebtoonImg,
  },
  {
    title: "내가 더 선호하는 패션 앱은?",
    leftImg: MusinsaImg,
    rightImg: ZigzagImg,
  },
  { title: "내가 더 선호하는 OTT 앱은?", leftImg: KakaoImg, rightImg: TossImg },
  {
    title: "내가 더 선호하는 메신저 앱은?",
    leftImg: KakaoImg,
    rightImg: TossImg,
  },
  {
    title: "내가 더 선호하는 지도 앱은?",
    leftImg: KakaoImg,
    rightImg: TossImg,
  },
  {
    title: "내가 더 선호하는 쇼핑 앱은?",
    leftImg: KakaoImg,
    rightImg: TossImg,
  },
  {
    title: "내가 더 선호하는 배달 앱은?",
    leftImg: KakaoImg,
    rightImg: TossImg,
  },
  {
    title: "내가 더 선호하는 카메라 앱은?",
    leftImg: KakaoImg,
    rightImg: TossImg,
  },
  {
    title: "내가 더 선호하는 인터넷 방송 앱은?",
    leftImg: KakaoImg,
    rightImg: TossImg,
  },
  {
    title: "내가 더 선호하는 알바 앱은?",
    leftImg: KakaoImg,
    rightImg: TossImg,
  },
  {
    title: "내가 더 선호하는 숏폼 앱은?",
    leftImg: KakaoImg,
    rightImg: TossImg,
  },
  {
    title: "내가 더 선호하는 중고거래 앱은?",
    leftImg: KakaoImg,
    rightImg: TossImg,
  },
  {
    title: "내가 더 선호하는 숙박 앱은?",
    leftImg: KakaoImg,
    rightImg: TossImg,
  },
];

const Home = () => {
  const [selectList, setSelectList] = useState<number[]>(
    new Array(15).fill(-1)
  );

  useEffect(() => {
    console.log(selectList);
  }, [selectList]);

  return (
    <Div>
      <div className="height">
        {array.map((v: any, idx: number) => (
          <Item
            title={v.title}
            isChecked={selectList[idx] !== -1 ? "true" : "false"}
          >
            <Choices
              setSelectList={setSelectList}
              selectList={selectList}
              order={String(idx)}
              left={v.leftImg}
              right={v.rightImg}
            />
          </Item>
        ))}
      </div>
      {/* <PhoneStyle src={Phone} alt="" /> */}
    </Div>
  );
};

const PhoneStyle = styled.img`
  /* height: 100%;
  position: fixed;
  top: 0; */
`;

const Div = styled.div`
  /* padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .height {
  } */
`;

export default Home;
