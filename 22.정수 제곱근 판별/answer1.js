// n 의 제곱근이 정수라면
// (n 의 제곱근 +1) 의 제곱을 반환하고
// n 의 제곱근이 정수가 아니라면
// -1 반환

function solution(n) {
  let sqrtN = Math.sqrt(n);
  return sqrtN === parseInt(sqrtN) ? Math.pow(sqrtN + 1, 2) : -1;
}