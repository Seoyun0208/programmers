// 문자열을 모두 소문자로 바꾼 후 공백 기준으로 문자열을 쪼갠다
// 쪼갠 문자열을 순차적으로
// 첫 문자가 영문 소문자라면
// 첫 문자를 대문자로 바꾸고
// 첫 문자가 영문 소문자가 아니라면
// 첫 문자는 그대로 둔다.

function solution(s) {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let splited = s.toLowerCase().split(' '); 
  let replaced = [];
  for (let i = 0; i < splited.length; i++) {
      let str = splited[i];
      if (abc.includes(str[0])) {
          replaced.push(str.replace(str.charAt(0),str.charAt(0).toUpperCase()))
      } else {
          replaced.push(str);
          continue;
      }
      
  }
  return replaced.join(' ');
}