// answer 배열의 마지막 요소와 arr 배열의 요소를 순서대로 비교했을 때
// 값이 같지 않으면
// answer 의 배열에 추가

function solution(arr) {
  let answer = [];
  for(let i = 0; i < arr.length; i++) {
      if (answer[answer.length-1] !== arr[i]) {
          answer.push(arr[i]);
      }
  }
  return answer;  
}