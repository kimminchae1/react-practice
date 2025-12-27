// 함수 선언

let area1 = getArea(10, 20); // 10, 20 = 인수
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

// 호이스팅 ('끌어올리다' 라는 뜻)
// 선언문을 호출문 보다 아래에 놔도 내부적으로 알아서 올려져서 실행됨
function getArea(width, height) {
  // 중첩 함수 (함수 안에 또다른 함수)
  function another() {
    console.log("another");
  }
  another();

  let area = width * height;
  return area; // 반환값
  console.log("hello"); // return 다음이므로 실행 ㄴㄴ
}
