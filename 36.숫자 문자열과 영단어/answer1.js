// s 의 요소들을 for 반복문을 통해 확인하여
// 숫자라면 answer 배열에 추가
// 숫자가 아니라면 temp 에 해당 문자를 추가
// temp 에 저장된 문자열이 nums 의 요소 중에 없다면 continue
// temp 에 저장된 문자열이 nums 의 요소라면
// 해당 요소의 인덱스(숫자로 변환한 값)을 answer 배열에 추가 후 temp 는 초기값 '' 로 재할당
// 모든 반복이 끝나면 배열의 요소들을 이어붙여서 Number 타입으로 리턴

function solution(s) {
  let answer = [];
  let temp = '';
  let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for (let i = 0; i < s.split('').length; i++) {
      if (isNaN(s[i]/1) === false) {
          answer.push(s[i]);
      } else {
          temp += s[i];
          for (let num of nums) {
          if (temp.includes(num)) {
              answer.push(nums.indexOf(temp));
              temp = '';
          } else {
              continue;
          }
      }
  }
  }
  return answer.join('')/1;
}