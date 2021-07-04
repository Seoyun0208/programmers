// Number 타입의 숫자를 String 타입으로 변환한 뒤
// 하나씩 쪼개어 배열에 넣고
// 순서를 뒤집은 후
// 다시 Number 타입으로 배열의 요소들을 변환한다.

function solution(n) {
  return (n+"").split("").reverse().map(x => +x);
}