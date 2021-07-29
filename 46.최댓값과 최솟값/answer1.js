function solution(s) {
  let NumArr = s.split(' ').sort((a,b) => a - b);
  return `${NumArr[0]} ${NumArr[NumArr.length-1]}`
}

// 오름차순대로 정렬해서 배열의 첫 번째 값과 마지막 값을 이어붙여줌