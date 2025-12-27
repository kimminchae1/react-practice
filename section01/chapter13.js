// 1. 콜백 함수
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함
function main(value) {
  value();
}

main(() => {
  // console.log("I am sub");
});

// 2. 콜백함수 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});
