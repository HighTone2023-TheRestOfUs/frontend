import Content from "../../components/Result/Content/Content";
import Buttons from "../../components/Result/Buttons/Buttons";
import * as R from "./Result.style"

const Result = () => {
    return (
        <R.Wrapper>
            <Content/>
            <Buttons/>
        </R.Wrapper>
    );
};

export default Result;