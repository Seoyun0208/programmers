// for 반복문을 통해 n + 1 한 값부터 차례대로 i 에 넣어
// i 를 2진수로 바꾼 후 1의 개수를 세어
// 2진수로 바꾼 n 의 1의 개수와 비교하여
// 개수가 동일하면
// i 를 반환

function solution(n) {
  for (let i = n + 1; ; i++) {
      if (n.toString(2).match(/1/g).length === i.toString(2).match(/1/g).length) {
          return i;
      }
  }
}