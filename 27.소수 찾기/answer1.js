// 에라토스테네스의 체 이용
// 1. 빈 배열 arr 선언 및 할당
// 2-1. 0부터 입력받은 n 까지의 횟수만큼
// 2-2. true 를 arr 배열에 넣음 
//      기본값을 true 로 하는 것이며, 최종적으로는 소수만 true 가 됨
//      ** 0부터 넣는 이유는 인덱스가 0부터 시작하므로 헷갈림을 방지하기 위해서임
// 3-1. 첫 소수인 2부터 주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화
// 3-1-1. 첫 arr[i] 가 true(이 때, i = 2 이며 소수)이므로 
//        3-1-1-1. 과정과 3-1-1-2. 과정을 반복했을 때 남는 arr[i] 는 모두 소수
// 3-1-1-1. i 는 남겨두고, i * 2, i * 3, i * 4... 한 인덱스(j)를 찾아서
// 3-1-1-2. 해당 인덱스의 값(arr[j])을 모두 false 로 바꿈
// 4. arr 배열의 첫 두 요소인 0과 1은 소수가 아니므로 false 로 바꿈
// 5-1. arr.filter() 를 사용하여 arr 배열에서
// 5-2. 최종적으로 true(소수에 해당)만 추출하여 result 배열 생성
// 6. result 배열의 length 를 계산하여 소수의 개수를 반환

function solution(n) {
  const arr = []; // 1.

  for (let i = 0; i <= n; i++) { // 2-1.
      arr.push(true); // 2-2.
  }

  for (let i = 2; i <= Math.sqrt(n); i++) { // 3-1.
      if (arr[i]) { // 3-1-1.
          for (let j = 2 * i; j <= n; j += i) { // 3-1-1-1.
              arr[j] = false; // 3-1-1-2.
          }
      }
  }
  
  arr.splice(0, 2, false, false); // 4.
  
  const result = arr.filter((num) => { // 5-1.
      return num !== false; // 5-2.
  })
  
  return result.length; // 6.
}