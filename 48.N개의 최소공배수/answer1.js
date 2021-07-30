function solution(arr) {
  function LCM (num1, num2) {
      for (let i = Math.max(num1,num2); i > 0; i--) {
          if (num1 % i === 0 && num2 % i === 0) {
              return (num1 / i) * (num2 / i) * i
          }
      }
  }

  return arr.reduce((acc, cur) => LCM (acc, cur))
}

// 두 수를 입력받았을 때, 최소공배수를 구하는 함수를 만듦
// arr.reduce() 함수와 최소공배수를 구하는 함수를 이용하여 
// 배열 내 모든 수의 최소공배수를 구함