// n 이 짝수라면 n/2 만큼 '수박' 이라는 글자 반복
// n 이 홀수라면 n/2 만큼 '수박' 이라는 글자가 반복되고 '수' 글자가 추가로 붙음

function solution(n) {
  if (n % 2 === 0) {
      return '수박'.repeat(n/2); 
  } else {
      return '수박'.repeat(n/2) + '수'
  }
}