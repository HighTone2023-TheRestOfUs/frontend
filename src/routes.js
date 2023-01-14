import Home from "./pages/Home";
import Result from "./pages/result/Result";

const routes = [
  { path: "*", element: <div>페이지 못 찾음</div>, header: true,headerTitle:"404" },
  { path: "", element: <Home />, header: true,headerTitle:"검사하기" },
  {path:"result",element:<Result />, header:true,headerTitle:"검사결과"}
];

export default routes;