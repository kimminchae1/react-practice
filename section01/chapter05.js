// 원시타입
// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // not number = 수치연산 실패했을 때 결과값으로 사용함
// console.log(1 * "hello");

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;
// console.log(introduce);

// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; //``을 쓰면 ${} 변수의 값을 동적으로 집어넣을 수 있음
// console.log(introduceText);

// 3. boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다.)
// 직접 명시적으로 변수에 할당해줘야 하는 값 (내가 직접 이 변수에 아무 값이 없다 표현)
let empty = null;
console.log(null);

// 5. Undefined Type
// 진짜 변수를 선언하고 아무런 값을 할당하지 않았을 때 자동으로 들어가는 값
let none;
console.log(none);
