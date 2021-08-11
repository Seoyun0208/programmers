// 학생들의 패턴을 최대값(10,000)만큼 반복
// arr.filter() 를 통해 답안과 일치하는 부분들만 학생별로 추출
// 추출한 값들은 result 객체에 추가
// 객체 내의 요소 중 value 가 가장 큰 key 값을 찾아 리턴

function solution(answers) {
  let st1 = '12345'.repeat(2000).split('')
  let st2 = '21232425'.repeat(1250).split('')
  let st3 = '3311224455'.repeat(1000).split('')

  let result = {0: 0};
  result[1] = answers.filter((x, i) => x === st1[i]/1).length
  result[2]= answers.filter((x, i) => x === st2[i]/1).length
  result[3] = answers.filter((x, i) => x === st3[i]/1).length

  return Object.values(result).map((x, idx) => x === Math.max(...Object.values(result)) ? idx : '').filter(x => x !== '')
}

// 학생들의 패턴을 필요한 만큼만 반복할 수 있는 방법을 찾지 못해 최대값(10,000)만큼 반복
// 답은 찾았으나, 전체적으로 효율성이 떨어지는 코드인 것 같아 조금 더 효율적인 방법을 찾아봐야겠음