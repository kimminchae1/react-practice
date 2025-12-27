// 배열 메서드 2. 순회와 탐색

// 5가지의 요소 순회 및 탐색 메서드

// 1. for each
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
// 매개변수 : 현재값, 인덱스, 원본배열
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

// 활용 : arr1 배열의 모든 값을 곱하기 2 해서 doubledArr에 넣어라
let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// 3. indexOf -> 얕은 비교, 객체는 못 찾아냄 -> 이럴 땐 5번 방법 findIndex를 이용
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 배열에 찾으려는 값이 여러개 존재하면, 맨 앞에 있는 인덱스 반환
// 현재 배열에 존재하지 않는 값의 인덱스를 찾아달라고 하면, -1 반환
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

let objectArr = [{ name: "김민채" }, { name: "홍길동" }];
console.log(objectArr.indexOf({ name: "김민채" }));
console.log(objectArr.findIndex((item) => item.name === "홍길동"));

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는다. 요소를 그대로 반환
let arr5 = [{ name: "김민채" }, { name: "홍길동" }];
const finded = arr5.find((item) => item.name === "홍길동");
console.log(finded);
