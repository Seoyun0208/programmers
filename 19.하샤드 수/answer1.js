// 입력받은 Number 타입의 숫자를 String 타입으로 변환하여 쪼갠다. (배열의 원소가 됨)
// 배열의 각 원소를 Number 타입으로 변환 후 더한다.
// 원래의 수 x 를 sum 으로 나누어 나머지가 0인지 아닌지 확인한다.
// 나머지가 0이라면 true 로 반환한다.
// 나머지가 0이 아니라면 false 로 반환한다.

function solution(x) {
  let splitedX = String(x).split('');
  let sum = 0;
  for (let i = 0; i < splitedX.length; i++) {
      sum += parseInt(splitedX[i], 10);
  }
  return x % sum === 0 ? true : false;
}