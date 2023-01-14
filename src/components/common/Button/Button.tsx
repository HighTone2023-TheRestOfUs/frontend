import React, { ReactNode } from 'react';
import * as B from "./Button.style"

const Button = ({
    backgroundColor,
    fontColor,
    borderColor,
    title,
    onClick,
    disabledToggle=false,
    children
}:{
    backgroundColor:string,
    fontColor?:string,
    borderColor:string,
    title:string,
    onClick:()=>void,
    disabledToggle?:boolean,
    children: ReactNode
}) => {
    return (
        <B.Wrapper placeholder={title} backgroundColor={backgroundColor} borderColor={borderColor} fontColor={fontColor} onClick={onClick} disabled={disabledToggle} >
            {children}
        </B.Wrapper>
    )
}

export default Button;
