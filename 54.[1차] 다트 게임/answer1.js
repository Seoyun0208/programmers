// dartResult 의 문자열을 하나씩 확인해서
// String 타입의 숫자라면 temp 에 저장하고, 저장한 temp 의 값을 Number 타입의 숫자로 바꿈
// (숫자 10의 경우 1을 먼저 골라내고, 0을 골라내기 때문에 이 경우를 대비)
// 영문(S, D, T) 는 필수값이므로, 이에 해당하면 temp 값 수정하여 result 배열에 넣어줌
// 옵션(*, #) 이 있는 경우는 result 배열의 요소 중 해당하는 인덱스들의 값을 수정
// result 배열의 값들을 모두 더해서 Number 타입으로 리턴

function solution(dartResult) {
  let result = [];
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
      let str = dartResult[i];
      if (!isNaN(Number(str))) {
          temp += str
          temp = Number(temp)
        
      } else {
      if (str === 'S') {result.push(temp)}
      else if (str === 'D') {result.push(temp ** 2)}
      else if (str === 'T') {result.push(temp ** 3)}
        
      temp = 0;
        
      let now = result.length -1
      let before = result.length -2
      
      if (str === '*') { 
          result[now] = result[now] * 2
        
          if (result[before] !== 'undefined') {
              result[before] = result[before] * 2
            
          }
      } else if (str === '#')  {
          result[now] = result[now] * -1
      }
  }
}
  return result.reduce((acc, cur) => acc + cur ,0)
}

// 문제를 풀었다는 것에 의의를..
// 맨처음에 문제를 봤을 때 손도 못 대서 안 풀고 지나간 적 있음
// 고차함수까지 공부를 끝내고 왔을 때 약간 어떻게 풀어야 할 지 감이 잡혀서 한 번 시도해봄