// // 단락 평가 Short-circuit Evaluation

// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return 10;
// }

// // returnTrue() && returnFalse() -> 순서에 따라 단락평가
// console.log(returnTrue() && returnFalse()); // && : 둘 다 참이어야 참
// console.log(returnTrue() || returnFalse()); // || : 왼쪽이 참이면 끝, 아니면 오른쪽

// 단락 평가 활용 사례
// function printName(person) {
//   if (!person) {
//     console.log("person에 값이 없음");
//     return;
//   }
//   console.log(person.name);
// }

// -> 위 조건문을 아래처럼 간결하게 작성할 수 있음
function printAge(person) {
  const Age = person && person.Age; // person이 없으면 거기서 끝, person.Age로 접근 안함
  console.log(Age || "person에 값이 없음");
}

printAge();
printAge({ Age: 25 });
