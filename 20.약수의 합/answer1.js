// n 을 1부터 n 까지의 수로 나누었을 때 나누어 떨어지면 약수
// 나누어 떨어지는 수를 모두 더하여 sum 에 할당

function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
          sum += i;
      }
  }
  return sum;
}