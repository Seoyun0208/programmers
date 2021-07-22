// 문자열 s 에 '()' 모양으로 문자열이 포함되어있는 동안
// '()' 를 찾아 ''(공백)으로 바꿈
// 괄호의 짝이 다 맞아 떨어져서 문자열 s 의 길이가 0 이 되면 
// true 리턴
// 그렇지 않으면 false 리턴

function solution(s) {
  while (s.includes("()")) {
      s = s.replace(/\(\)/g, "");
  }
  return s.length === 0 ? true : false;
}

// 효율성 테스트를 통과하지 못함
// 어떤 부분이 시간 소요가 많이 되는지 확인 못함 (아직 그럴 능력이..)