function solution(nums) {
  const numsArr = [];
  let notPrime = 0;

  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          for (let k = j + 1; k < nums.length; k++) {
              numsArr.push(nums[i] + nums[j] + nums[k]);
          }
      }
  }

  for (let l = 0; l < numsArr.length; l++) {
      for (let m = 2; m < numsArr[l]; m++) {
          if (numsArr[l] % m === 0) {
              notPrime += 1;
              break;
          }
      }
  }
  return numsArr.length - notPrime;
}