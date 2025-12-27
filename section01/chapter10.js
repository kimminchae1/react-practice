// 반복문
// for (초기식; 조건식; 증감식;) {
//     console.log("반복:")
// }

for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 아래 코드를 건너뛰고 다음 반복으로 가라
  }
  console.log(idx);
  if (idx >= 5) {
    break;
  }
}
