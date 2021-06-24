function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
      if (Number.isInteger(Math.sqrt(i))) {
          sum -= i;
      } else {
          sum += i;
      }
  }
  return sum;
}

// 4의 약수는 1,2,4
// 9의 약수는 1,3,9
// 제곱근이 존재하는 경우에는 항상 약수의 개수가 홀수임을 이용