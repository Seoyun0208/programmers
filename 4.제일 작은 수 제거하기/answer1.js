// 1 = arr.length 인 경우 
// 최소값은 자기자신이므로 제거되고 나면 빈 배열이 되므로 -1 리턴
// 1 > arr.length 인 경우
// 최소값을 제거하고 남은 배열을 리턴

function solution(arr) {
  var answer = [];
  let min = Math.min(...arr);
  if (1 < arr.length ) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== min) {
              answer.push(arr[i])
          }
      }
  } else if (arr.length === 1) {
      answer.push(-1);
  }
  return answer;
}