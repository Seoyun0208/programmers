// s 의 길이를 반으로 나눈 값이
// 정수이면? 가운데 두 글자를 반환
// 정수가 아니라면? 가운데 한 글자를 반환

function solution(s) {
  let halfS = s.length / 2
  return Number.isInteger(halfS) ? s[halfS-1] + s[halfS] : s[(Math.round(halfS))-1]
}

// s 의 길이를 반으로 나눈 값과 구해야 하는 글자의 인덱스의 격차를 이해해야 함