import React from "react";

const useChoices = ({
  setSelectList,
}: {
  setSelectList: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  const changeNumber = (e: any) => {
    setSelectList((prev: any) =>
      prev.map((v: any, idx: number) =>
        idx === Number(e.target.slot.split(" ")[1])
          ? Number(e.target.slot.split(" ")[0])
          : v
      )
    );
  };

  return { changeNumber };
};

export default useChoices;
