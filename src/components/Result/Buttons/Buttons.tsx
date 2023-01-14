import React from 'react';
import Button from '../../common/Button/Button';
import * as B from "./Buttons.style"

import * as theme from "../../../styles/theme"

const Buttons = () => {
    return (
        <B.Wrapper>
            <Button
            title='공유하기'
            backgroundColor={theme.lightTheme.main}
            borderColor={theme.lightTheme.main}
            onClick={() => console.log("hi")}
            >공유하기</Button>
            <Button
            title='공유하기'
            fontColor={theme.lightTheme.main}
            backgroundColor={"white"}
            borderColor={theme.lightTheme.main}
            onClick={() => console.log("hi")}
            >다시하기</Button>
        </B.Wrapper>
    )
}

export default Buttons;
