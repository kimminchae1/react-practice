import { useEffect } from "react";

// 브라우저 탭 제목
// 컴포넌트가 렌더링된 뒤 실행되는 코드
// [] -> 컴포넌트가 처음 나타날 때 딱 한 번만 실행

const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
