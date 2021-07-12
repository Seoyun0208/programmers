function solution(s, n) {
  let S = s.split('');
  let abc = 'abcdefghijklmnopqrstuvwxyz'.repeat(2).split('');
  let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(2).split('');
  let answer = '';

  for (let i = 0; i < S.length; i++) {
      if (S[i] === " ") {
          answer += ' ';
          continue;
      } else if (abc.includes(S[i])) {
          answer += abc[abc.indexOf(S[i])+ n];
      } else if (ABC.includes(S[i])) {
          answer += ABC[ABC.indexOf(S[i])+ n];
      }
  }
  return answer;
}