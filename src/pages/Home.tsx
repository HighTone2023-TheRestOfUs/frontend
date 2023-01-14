import React, { useEffect, useState } from "react";
import Choices from "../components/choices/Choices";
import Item from "../components/item/Item";
import KakaoImg from "../assets/kakao.png";

const array = [
  { title: "내가 더 선호하는 금융 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 SNS 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 웹툰 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 패션 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 OTT 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 메신저 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 지도 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 쇼핑 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 배달 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 카메라 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 인터넷 방송 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 알바 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 숏폼 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 중고거래 앱은?", leftImg: KakaoImg },
  { title: "내가 더 선호하는 숙박 앱은?", leftImg: KakaoImg },
];

const Home = () => {
  const [selectList, setSelectList] = useState<number[]>(
    new Array(15).fill(-1)
  );

  useEffect(() => {
    console.log(selectList);
  }, [selectList]);

  return (
    <div>
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
          />
        </Item>
      ))}
    </div>
  );
};

export default Home;
