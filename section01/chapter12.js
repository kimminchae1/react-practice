// 1. 함수 표현식 (호이스팅 안됨)

function funcA() {
  // console.log("funcA");
}

let varA = funcA;
varA();

// 함수를 변수에 담을 수 있다.
// funcB는 선언문이 아니기 때문에 (값으로서 함수가 생성된 것)
// 함수의 이름으로 호출 불가
// 그래서 이름 생략해도 됨 -> 익명 함수
let varB = function () {
  // console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varC(10));
