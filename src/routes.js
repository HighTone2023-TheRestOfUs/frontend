import Home from "./pages/Home";
import Result from "./pages/result/Result";

const routes = [
  { path: "*", element: <div>페이지 못 찾음</div>, header: true },
  { path: "", element: <Home />, header: true },
  {path:"result",element:<Result />, header:true}
];

export default routes;