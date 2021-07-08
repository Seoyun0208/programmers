// 참가자와 완주자들의 이름을 정렬하여
// 앞에서부터 차례대로 비교했을 때 달라지는 인덱스의 값이
// 참여자 명단에는 있지만 완주자 명단에는 없는 사람의 이름이므로 반환
// 단 한명의 사람만 완주를 못한 것이기에 해당방법 사용 가능

function solution(participant, completion) {
  let p = participant.sort();
  let c = completion.sort();
  for (let i = 0; i < participant.length; i++) {
      if (p[i] !== c[i]) {
          return p[i];
      }
  }
}