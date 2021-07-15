function solution(array, commands) {
  let result = [];
  let newArr = [];
  for (let arr of commands) {
      newArr = array.slice(arr[0]-1, arr[1]).sort((a,b) => a - b);
      result.push(newArr[arr[2]-1]);
  }
  return result;
}