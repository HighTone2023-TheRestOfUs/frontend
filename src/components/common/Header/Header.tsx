import React from 'react';
import * as H from "./Header.style"

const Header = ({title}:{title:string}) => {
    return (
        <H.Wrapper>
            {title}
        </H.Wrapper>
    );
};

export default Header;