// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// CJS (Common JS 모듈 시스템)
// module.exports = {
//   add: add,
//   sub: sub,
// };

// ESM (ES 모듈 시스템)
// 1. package.json에 "type": "module" > 추가해야 쓸 수 있음 > 이렇게 되면 CJS는 못씀
// export { add, sub }; // 객체 리터럴 생성
