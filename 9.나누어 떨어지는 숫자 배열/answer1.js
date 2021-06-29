// arr 의 요소 중 divisor 로 나누었을 때
// 떨어지는 수를 찾아 오름차순 정렬한다.
// arr 의 요소 중 divisor 로 나누어 떨어지는 수가 없다면
// 배열에 -1 을 담아 반환한다.

function solution(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % divisor === 0) {
          answer.push(arr[i]);
      }
  }
  if (answer.length === 0) {
      answer.push(-1);
  }
  return answer.sort(function (a, b){
      return a - b;
  });
}