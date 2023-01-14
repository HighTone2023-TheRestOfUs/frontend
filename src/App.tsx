import { useEffect, useLayoutEffect, useState } from "react";
import Header from "./components/common/Header/Header";
import routes from "./routes";

import * as A from "./App.style";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import Home from "./pages/Home";
import Result from "./pages/result/Result";

function App() {
  // const location = useLocation();
  const [renderInfo, setRenderInfo] = useState({
    header: true,
    element:routes[0].element
  });

  useLayoutEffect(() => {
    let temp = routes.find(
      (element) => element.path === window.location.pathname.split("/")[1]
    );
    if (temp === undefined) {
      temp = routes.find((element) => element.path === "*");
    }
    if (temp) setRenderInfo({ header: temp.header, element:temp.element });
  }, [window.location.pathname]);

  return (
    <ThemeProvider theme={lightTheme} >
      <A.Wrapper>
        {renderInfo.header && <Header/>}
        <A.Core>
        {
          renderInfo.element
        }
        </A.Core>
      </A.Wrapper>
    </ThemeProvider>
  );
}

export default App;
