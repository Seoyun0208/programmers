// 각 부서가 신청한 금액의 배열을 오름차순으로 정렬하여
// 작은 금액부터 더했을 때 전체 예산을 넘기지 않는 선까지만
// 부서 개수를 카운트하여 리턴

function solution(d, budget) {
  let arrD = d.sort( (a,b) => a - b );

  let count = 0;
  let sum = 0;
  for (let i = 0; i < arrD.length; i++) {
      if (sum + arrD[i] <= budget) {
          sum += arrD[i];
          count++;
      }
  }
  return count
}

// 문제를 잘못 읽어서 시간 오래 걸림
// 각 부서 물품 예산의 합이 전체 예산과 똑같은 경우 중
// 최대 몇 개의 부서에 물품 지원이 가능한지를 묻는 게 아님
// 전체 예산 내에서 최대 몇 개의 부서에 물품 지원이 가능한지 묻는 문제임