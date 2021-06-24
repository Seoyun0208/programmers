function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
      for (let j = i+1; j < numbers.length; j++) {
          if (i !== j) {
              result.push(numbers[i] + numbers[j]);
          }
      }
  }
  return [...new Set(result)].sort((a,b) => a - b)
}

// 처음에 for ...of 문을 사용하고, 
// arr.indexOf() 를 이용해서 같은 인덱스인 경우 건너뛰고자 하였으나,
// arr.indexOf() 는 배열에 중복 요소가 있는 경우 
// 처음 나온 요소의 인덱스만을 찾게 되므로 정확한 값을 리턴하지 못함