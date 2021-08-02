function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
      let rows1 = arr1[i];
      answer.push([]);
      for (let j = 0; j < arr2[0].length; j++) {
          let result = 0;
          for (let k = 0; k < arr1[0].length; k++) {
              let rows2 = arr2[k];
              result += rows1[k] * rows2[j]
          }
          answer[i].push(result);
      }
  }
  return answer;
}