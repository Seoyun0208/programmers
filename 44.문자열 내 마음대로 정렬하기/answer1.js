// strings 배열의 요소 중 각 n번 째 글자를 기준으로 오름차순 정렬
// n번 째 글자가 같은 경우, 해당하는 배열의 요소들을 오름차순으로 정렬

function solution(strings, n) {
  strings.sort(function (a, b) {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }
  })
  return strings
}