// 한 자리당 들어갈 수 있는 숫자는 0부터 9까지이며, String 타입으로 입력받을 예정
// 따라서 num 배열에 String 타입으로 숫자를 넣어줌
// 1. 입력받은 글자의 수가 4개, 6개에 해당하면 
// 1-1. 이중 for 문을 돌려서 num 배열의 요소와 일치하면 count 를 +1
// 1-2. count 된 개수와 s.length 가 일치하면 true, 아니면 false
// 2. 입력받은 글자의 수가 4개, 6개에 해당하지 않으면
// 2-1. 바로 false

function solution(s) {
  let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let count = 0;
  if (s.length === 4 || s.length === 6) {
      for (let i = 0; i < s.length; i++) {
          for (let j = 0; j < num.length; j++) {
             s[i] === num[j] ? count += 1 : count;
          }
      }
      return s.length === count ? true : false;
  } else {
      return false;
  }
}

// Number() 메소드를 이용해서 풀다가 테스트케이스 2개가 통과가 안 되어서 풀이방법 변경