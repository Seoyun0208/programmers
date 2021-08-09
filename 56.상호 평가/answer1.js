// 각 학생들이 받은 점수를 newArr 배열로 만듦
// i 와 j 가 같을 때 newArr[i][j]는 자신이 평가한 자신의 점수에 해당
// 자신이 평가한 자신의 점수가 max 혹은 min 값과 일치하고 유일할 때
// 해당하는 max 혹은 min 값 제거
// (max 혹은 min 값의 인덱스를 배열의 앞에서부터 찾았을 때와 
// 배열의 뒤에서부터 찾았을 때 동일하면 유일한 max 혹은 min 의 값)
// 제거하고 남은 요소를 가진 배열의 각 평균값을 찾아서 해당하는 등급을 문자열로 더해줌

function solution(scores) {
  let newArr = [];
  let grades = ""
  for (let i = 0; i < scores.length; i++){
      newArr.push(scores.map(x => x[i]))
  }
  for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr[i].length; j++) {
          let onlyMax = newArr[i].indexOf(Math.max(...newArr[i])) === newArr[i].lastIndexOf(Math.max(...newArr[i]));
          let onlyMin = newArr[i].indexOf(Math.min(...newArr[i])) === newArr[i].lastIndexOf(Math.min(...newArr[i]));
          if (i === j) {
              if (newArr[i][j] === Math.max(...newArr[i]) && onlyMax) {
                  newArr[i].splice(j, 1)
              } else if (newArr[i][j] === Math.min(...newArr[i]) && onlyMin) {
                  newArr[i].splice(j, 1)
              }
          }
      }
      let avg = newArr[i].reduce((a, c) => a + c) / newArr[i].length
      if (avg >= 90) {
          grades += 'A'
      } else if (avg >= 80) {
          grades += 'B'
      } else if (avg >= 70) {
          grades += 'C'
      } else if (avg >= 50) {
          grades += 'D'
      } else {
          grades += 'F'
      }
  }
  return grades;
}