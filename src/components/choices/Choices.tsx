import React from "react";
import styled from "styled-components";
import useChoices from "./hooks/useChoices";
import checkImg from "../../assets/check.png";

const Choices = ({
  setSelectList,
  selectList,
  order,
  left,
  right,
}: {
  setSelectList: React.Dispatch<React.SetStateAction<number[]>>;
  selectList: any[];
  order: string;
  left: any;
  right: any;
}) => {
  const { changeNumber } = useChoices({ setSelectList });

  return (
    <ChoicesStyle>
      {new Array(5).fill(0).map((v, idx) =>
        idx != selectList[Number(order)] ? (
          <div slot={`${idx} ${order}`} onClick={changeNumber}>
            {idx === 0 && (
              <img
                className="opacity"
                src={left}
                slot={`${idx} ${order}`}
                onClick={changeNumber}
              />
            )}
            {idx === 4 && (
              <img
                className="opacity"
                src={right}
                slot={`${idx} ${order}`}
                onClick={changeNumber}
              />
            )}
          </div>
        ) : (
          <div>
            <img src={checkImg} alt="" />
          </div>
        )
      )}
    </ChoicesStyle>
  );
};

const ChoicesStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    background-color: #eeeeee;
    border-radius: 50%;
  }

  div:nth-child(1) {
    width: 48px;
    height: 48px;
  }
  div:nth-child(2) {
    width: 32px;
    height: 32px;
  }
  div:nth-child(3) {
    width: 24px;
    height: 24px;
  }
  div:nth-child(5) {
    width: 48px;
    height: 48px;
  }
  div:nth-child(4) {
    width: 32px;
    height: 32px;
  }

  img {
    width: 100%;
    height: 100%;
  }
  .opacity {
    opacity: 0.4;
  }
`;

export default Choices;
