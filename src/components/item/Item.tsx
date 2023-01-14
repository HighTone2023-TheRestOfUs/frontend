import React, { PropsWithChildren, useEffect } from "react";
import styled from "styled-components";

const Item = ({
  children,
  title,
  isChecked,
}: PropsWithChildren<{ title: string; isChecked: string }>) => {
  return (
    <ItemStyle isChecked={isChecked}>
      <h2>{title}</h2>
      <p>{children}</p>
    </ItemStyle>
  );
};

const ItemStyle = styled.div<{ isChecked: string }>`
  height: 89px;
  width: 248px;
  text-align: center;
  margin-bottom: 28px;
  color: ${({ isChecked }) => (isChecked === "true" ? "#ADADAD" : "#212121")};

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;

    margin-bottom: 20px;
  }
`;

export default Item;
