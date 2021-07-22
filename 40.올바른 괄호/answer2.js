// 1. 문자열 s 를 2로 나누었을 때 나누어떨어지고 (여는 괄호 - 닫는 괄호가 1쌍이므로)
// 2. 문자열의 시작은 '(' 이어야 하며 (짝이 맞으려면 여는 괄호로 시작해야 함)
// 3. 문자열의 끝은 ')' 이어야 함 (짝이 맞으려면 닫는 괄호로 끝나야 함)
// 1~3 이 참이라면 for 반복문 진행, 거짓이라면 바로 false 반환
// for 반복문에서 
// 여는 괄호의 수와 닫는 괄호의 수를 i 가 진행할 때마다 비교해서
// i 까지 확인했을 때
// 여는 괄호의 수보다 닫는 괄호의 수가 많다면 이미 짝이 맞지 않으므로 false 반환
// 최종적으로 여는 괄호의 수와 닫는 괄호의 수가 같다면 짝이 맞으므로 true 반환
// 아니라면 false 반환

function solution(s) {
  let longS = s.length;
  let open = 0;
  let close = 0;
  if (longS % 2 === 0 && s[0] === '(' && s[longS - 1] === ')') {
      for (let i = 0; i < longS; i++) {
          if (s[i] === '(') {
              open += 1;
          } else {
              close += 1;
          }
          if (open < close) {
              return false;
          }
      }
      return open - close === 0 ? true : false;
  }
  return false;
}