// n 과 m 중에 작은 수를 k 라고 함
// k부터 1씩 빼가면서 n 과 m 을 나누어 봄
// n 과 m 이 동시에 나누어지는 첫 번째수는 최대공약수
// (n * m / 최대공약수) 는 최소공배수

function solution(n, m) {
  let k = Math.min(n, m);
  let answer = [];
  for (let i = k; i > 0; i--) {
      if (n % i === 0 && m % i === 0) {
          answer.push(i, n * m / i);
          break;
      }
  }
  return answer;
}