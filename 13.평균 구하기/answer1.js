// arr 내의 원소를 모두 더하여
// arr.length 를 나눔

function solution(arr) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      avg = sum / arr.length;
  }
  return avg;
}

// 평균 구하는 공식 사용