// arr 의 값 중 최소값을 찾아 삭제
// 삭제 후 남은 arr 요소가 없으면 [-1] 반환
// 삭제 후 남은 arr 요소가 있으면 해당 요소들을 배열의 형태로 반환

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)),1);
  return arr.length === 0 ? [-1] : arr
}

// arr.splice() 는 arr 원본을 수정하며 
// 제거된 요소만을 담은 배열의 형태로 반환