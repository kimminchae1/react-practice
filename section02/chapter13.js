// 비동기 작업 처리하기 2. Promise
// Promise란? 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체

// 대기 상태 Pending : 아직 작업이 완료되지 않은 상태
// 해결 resolve -> 성공 상태 Fulfilled : 비동기 작업이 성공적으로 마무리 된 상태
// 거부 reject -> 실패 상태 Rejected : 비동기 작업이 실패한 상태

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수 (executor)

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아니다.");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
