import { useEffect, useLayoutEffect, useState } from "react";
import Header from "./components/common/Header/Header";
import routes from "./routes";

import * as A from "./App.style";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import Home from "./pages/Home";
import Result from "./pages/result/Result";
import { Route, Routes } from "react-router-dom";

function App() {
  // const location = useLocation();
  const [renderInfo, setRenderInfo] = useState({
    header: true,
    element:routes[0].element,
    headerTitle:"기본헤더제목"
  });

  useLayoutEffect(() => {
    let temp = routes.find(
      (element) => element.path === window.location.pathname.split("/")[1]
    );
    if (temp === undefined) {
      temp = routes.find((element) => element.path === "*");
    }
    if (temp) setRenderInfo({ header: temp.header, element:temp.element,headerTitle:temp.headerTitle });
  }, [window.location.pathname]);

  return (
    <ThemeProvider theme={lightTheme} >
      <A.Wrapper>
        {renderInfo.header && <Header title={renderInfo.headerTitle} />}
        <A.Core>
          <Routes>
          {routes.map((element) => {
            return (
              <Route
                path={element.path}
                element={element.element}
                key={element.path}
              />
            );
          })}
        </Routes>
        </A.Core>
      </A.Wrapper>
    </ThemeProvider>
  );
}

export default App;
