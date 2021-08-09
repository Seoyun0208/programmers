// arr1 의 요소와 인덱스를 가지고 arr2 의 같은 인덱스를 가지는 요소를 OR 비트 연산자(|)를 통해 비교
// 비교한 결과값은 10진수로 나오므로 다시 2진수로 바꿔준 뒤
// str.padStart() 로 자리수를 맞춰줌
// 마지막으로 숫자 1은 #으로, 숫자 0은 공백으로 처리

function solution(n, arr1, arr2) {
  return arr1.map((x, i) => (x|arr2[i]).toString(2).padStart(n,0).replace(/1/g,'#').replace(/0/g, ' '))
  }
  
  // 비트 연산자 공부 후 풀이