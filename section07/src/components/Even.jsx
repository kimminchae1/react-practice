import { useEffect } from "react";

const Even = () => {
  // useEffect는 mount가 될 때 실행
  // 이 컴포넌트가 사라질 때 이 함수를 실행해라
  useEffect(() => {
    // 클린업, 정리함수 -> useEffect가 끝날 때 실행
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
