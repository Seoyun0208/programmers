// 배열의 요소 개수만큼 
// a[idx] * b[idx] 을 반복하여 모두 더함

function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
      answer += a[i] * b[i];
  }
  return answer;
}