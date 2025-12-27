// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

/// 3. 복합 대입 연산자 (산술 + 대입)
let num7 = 10;
num7 += 20; //num7 = num7 + 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
num8++;
++num8;
// console.log(++num8); // 전위 연산
// console.log(num8++); // 후위 연산 (다음 줄 부터 적용)
// console.log(num8);

// 5. 논리 연산자
let or = true || false; // 두 개의 값 중에 하나만 참이면 참
let and = true && false; // 둘 다 모두 참이여야 참
let not = !true; // true면 false로, false면 true로

// 6. 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
