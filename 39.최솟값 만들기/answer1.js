// A 배열을 오름차순으로 정렬한 후 minArr 에 할당한다.
// B 배열을 내림차순으로 정렬한 후 maxArr 에 할당한다.
// minArr 의 요소와 maxArr 의 요소를 순차적으로 곱하여 sumArr 에 넣는다.
// sumArr 의 요소들을 모두 더한다.

function solution(A,B) {
  let minArr = A.sort((a,b) => a - b);
  let maxArr = B.sort((a,b) => b - a);
  let sumArr = minArr.map((num1,idx1) => num1 * maxArr[idx1]); 
  return sumArr.reduce((a,b) => a + b);
}

// 곱한 수들의 합이 최소가 되기 위해서는
// 제일 큰 수와 제일 작은 수를 곱하면 됨
// 따라서 A 배열에서는 제일 작은 수부터 찾고
// B 배열에서는 가장 큰 수부터 찾음