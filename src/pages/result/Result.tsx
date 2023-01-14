import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Content from "../../components/Result/Content/Content";
import Graph from "../../components/Result/Graph/Graph";
import * as R from "./Result.style"

const Result = () => {

    return (
        <R.Wrapper>
            <Content/>
            <Graph/>
        </R.Wrapper>
    );
};

export default Result;