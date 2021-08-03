// 전체 학생 수 n 명에게 각각 번호를 붙여 arr 배열을 만듦

// arr.map() 메소드를 이용하여 체육복 개수를 배열로 하는 has 배열을 만듦
// lost 번호와 reserve 번호 모두에 해당하는 학생들은 
// 체육복이 1개만 남으므로 번호 대신 체육복 개수 1로 변경
// lost 번호에만 해당하면 체육복이 1개인 상태에서 1개를 도둑 맞아, 
// 체육복이 남지 않으므로 번호 대신 체육복 개수 0으로 변경
// reserve 번호에만 해당하면 체육복이 2개인 상태에서 도둑맞지 않아,
// 체육복이 모두 남아있으므로 번호 대신 체육복 개수 2로 변경

// 첫 번째 경우로, 체육복이 2개인 학생이 오른쪽을 먼저 확인하여 나눠주고, 왼쪽을 확인하여 나눠줌
// 두 번째 경우로, 체육복이 2개인 학생이 왼쪽을 먼저 확인하여 나눠주고, 오른쪽을 확인하여 나눠줌
// 첫 번째 경우와 두 번째 경우를 비교해 더 많이 나눠줄 수 있는 방법을 리턴

function solution(n, lost, reserve) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
      arr.push(i) 
  }
  let has = arr.map(num => lost.includes(num) && reserve.includes(num) ? 1 : lost.includes(num) ? 0 : reserve.includes(num) ? 2 : 1) 
  let distributed1 = has.join('').replace(/20/g,'11').replace(/02/g,'11').split('').reduce((acc, cur) => cur !== '0' ? acc + cur : acc,'').length
  let distributed2 = has.join('').replace(/02/g,'11').replace(/20/g,'11').split('').reduce((acc, cur) => cur !== '0' ? acc + cur : acc,'').length
  return Math.max(distributed1, distributed2)
}