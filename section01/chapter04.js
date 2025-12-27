// 1. 변수 선언 (초기화 한다.)
let age;
//console.log(age); //undefined

age = 30;
//console.log(age);

// 2. 상수 (초기화가 반드시 필요함, 선언 이후에 다시는 값을 넣어줄 수 없음)
const birth = "1997.01.07";

// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다. (let, if,,,)

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
