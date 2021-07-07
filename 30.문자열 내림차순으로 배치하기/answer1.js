function solution(s) {
  return s.split('').sort((a, b) => {
      if (a < b) return 1;
      else if (a > b) return -1;
      else return 0;
  }).join('');
}

// 오늘 공부한 내용 활용을 위해 
// 문자열을 정렬 시 arr.reverse() 를 사용하지 않고
// arr.sort() 를 이용해 정렬해봄