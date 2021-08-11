function solution(nums) {
  let max = nums.length/2;
  let newNums = [...new Set(nums)];
  return newNums.length > max ? max : newNums.length;
}