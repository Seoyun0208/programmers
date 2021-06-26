// s.length === 4 라면 
// 모든 숫자 그대로 나옴
// 4 < s.length <= 20 이라면 
// 끝자리 4개 제외하고는 * 처리

function solution(s) {
  var answer = '';
  let splits = '';
  if (s.length > 4 && s.length <= 20) {
      for (let i = 0; i <= s.length - 5; i++) {
      splits += '*'
      answer = splits + s.slice(s.length-4,s.length);
  }
} else if (s.length === 4) {
  answer = s;
}
return answer;
}