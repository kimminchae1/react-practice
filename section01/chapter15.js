// 객체 Object
// 원시 타입이 아닌 객체 타입의 자료형
// 여러가지 값을 동시에 저장할 수 있는 자료형을 의미
// 객체를 이용하면 현실세계에 존재하는 어떤 사물, 개념을 표현하기 용이함

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성) / key - value
let person = {
  name: "김민채", // 키의 이름을 가지고 불림. name 프로퍼티, age 프로퍼티,,,
  age: 25,
  hobby: "피겨스케이트",
  job: "입사예정...",
  extra: {},
  10: 20,
  "like cat": true,
};
// console.log(person.age);

// 3. 객체 프로퍼티를 다루는 방법
// 3.1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2. 새로운 프로퍼티를 추가하는 방법
person.compony = "신한항업";
person["favoriteFood"] = "떡볶이";
console.log(person.compony);
console.log(person.favoriteFood);
console.log(person);

// 3.3. 프로퍼티를 수정하는 방법
person.compony = "신한항업에 가요";
person["favoriteFood"] = "월남쌈";
console.log(person);

// 3.4. 프로퍼티를 삭제하는 방법
delete person.extra;
delete person["favoriteFood"];
console.log(person);

// 3.5. 프로퍼티 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "favoriteFood" in person;
console.log(result1);
