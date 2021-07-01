// str.split() 메소드는 문자열에서만 사용가능하므로 
// 입력받은 Number 타입 숫자를 String 타입으로 바꾼 다음 쪼갠다. (이 때, 배열로 바뀜)
// 배열에서 정렬을 한 후, 조합한다. (이 때, String 타입으로 바뀜)
// 결과값을 Number 타입으로 바꾼다.

function solution(n) {
  let answer = String(n).split('').sort(function(a, b) { 
  return b - a;}).join('');

  return Number(answer);
}

// arr.sort() 메소드 사용 후 arr.reverse() 를 사용하는 것이 훨씬 간편함을 기억하자!