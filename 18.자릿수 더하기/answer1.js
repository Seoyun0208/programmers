// Number 타입을 String 타입으로 바꾸어서 문자열을 쪼갠다.
// 쪼갠 문자열을 Number 타입으로 변환 후 더한다.

function solution(n) {
  let N = String(n).split('');
  let sum = 0;
  for (let i = 0; i < N.length; i++) {
      sum += parseInt(N[i], 10);
  }
  return sum;
}

// 공부하다보니 답안에 (n+"")로 적는 사람들이 꽤 있었는데
// Number 타입에 공백을 더하면 무조건 String 타입이 되기 때문에 이 방법을 이용하는 것 같음