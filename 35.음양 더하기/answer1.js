// signs 배열의 값이 true 라면
// absolutes 배열의 값을 더하고
// signs 배열의 값이 false 라면
// absolutes 배열의 값에 * -1 을 하여 음수로 만들어서 더한다.

function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < absolutes.length; i++) {
      signs[i] ? sum += absolutes[i] : sum += absolutes[i]*-1
  }
  return sum;
}

// 합계를 구하는 문제라 arr.reduce() 사용하고 싶었는데
// 어떤 식으로 접근해야할지 몰라서 기본적인 방법 사용