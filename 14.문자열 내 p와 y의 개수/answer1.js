// 대소문자 상관없이 확인해야 하므로, 강제적으로 대문자로 통일
// count 는 0에서 시작하며
// P 를 찾으면 +1, Y 를 찾으면 -1
// P 와 Y 의 개수가 같으면 0이므로
// count 값이 0이면 true , 0이 아니면 false 반환

function solution(s){
  let S = s.toUpperCase();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
      if (S[i] === 'P') {
          count += 1;
      } else if (S[i] === 'Y') {
          count -= 1;
      }
  }
  return count === 0 ? true : false;
}