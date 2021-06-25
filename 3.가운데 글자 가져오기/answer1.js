// 1 <= s.length <= 100
// s 의 길이가 홀수라면
// s 의 가운데 한 글자를 반환
// s 의 길이가 짝수라면
// s 의 가운데 두 글자를 반환

function solution(s) {
  var answer = '';
  let place = Math.floor(s.length / 2);
  if (1 <= s.length && s.length <= 100) {
      if (s.length % 2 === 1) {
          answer = s.substr(place, 1)
      } else {
          answer = s.substr(place-1, 2)
      }
  }
  return answer;
}