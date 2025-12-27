import { useState } from "react";

// 함수 앞에 use 붙여주면 useState 사용 가능
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
