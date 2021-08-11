// 1. 각 스테이지에 머물러 있는 사용자 수를 추출
// 2. 각 스테이지를 거쳐간 사용자 수 추출
// 3. 1. 에서 2. 를 나눈 값 추출
// 4. 3. 의 값들을 비교하여 내림차순으로 스테이지 정렬

function solution(N, stages) {
  let people = stages.length;
  let stay = {};
  for (let i = 1; i <= N+1; i++) {
      stay[i] = 0;
      for (let j = 0; j < stages.length; j++) {
          if (stages[j] === i) {
              stay[i] += 1;
              }
          }
      }
  let sum = 0
  for (let key in stay) {
  let temp = stay[key]
  stay[key] = temp /(people-sum);
  sum += temp
  }
  delete stay[N+1]
  let sorted = Object.keys(stay).sort(function(a,b){return stay[b]-stay[a]})
  return sorted.map(x => Number(x))
}

// 객체의 value 값을 가지고 key 를 정렬하는 방법을 알게 됨