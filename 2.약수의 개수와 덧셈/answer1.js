// 약수의 개수를 카운트하는 divisor 함수를 만든다.
// left 와 right 사이의 숫자들을 divisor 함수에 넣어서 
// 결과가 2의 배수이면 answer 에 숫자를 더한다.
// 아니라면 answer 에서 숫자를 뺀다.
// 최종적으로 answer 추출한다.

function divisor (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
          count += 1;
      }
  }
  return count;
}

function solution(left, right) {
  var answer = 0;
  if (1 <= left && left < right && right <= 1000) {
      for (let j = left; j <= right; j++) {
          if (divisor(j) % 2 === 0) {
            answer += j;
          } else {
              answer -= j;
          }
      }
  }

  return answer;
}