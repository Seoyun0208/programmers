// 배열에서 첫번째 수를 뽑는다.
// 첫번째 수를 제외한 나머지 수 중에서 두번째 수를 뽑는다.
// 두 수를 더하여 빈 배열에 넣는다.
// 1~3을 반복한다.
// 배열에 중복으로 존재하는 수를 제거한다.
// 배열에 있는 수들을 오름차순으로 정렬한다.

function solution(numbers) {
  let answer = [];
let answered = [];
  for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
          if(i !== j) {
              answer.push(numbers[i] + numbers[j]);			
      answered = [...new Set(answer)];
          }
      }
  }
  return answered.sort((a, b) => a - b)
}