import "./App.css";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

// 중요!!! 컴포넌트 함수의 이름 : 반드시 대문자
// 리렌더링 되는 경우 : 1.state 2.props 2.부모

function App() {
  return (
    <>
      <HookExam />
    </>
  );
}

export default App;
