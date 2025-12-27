// *** CJS (Common JS 모듈 시스템)

// -> 구조 분해 할당
// 객체에서 필요한 속성만 뽑아서 변수로 만드는 것
// const { add, sub } = require("./math.js");

// *** ESM (ES 모듈 시스템)
import mul, { add, sub } from "./math.js";

// *** Node.js 라이브러리 사용하기
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));
