// 가져갈 수 있는 포켓몬 수는 전체의 반이므로, nums.length/2 가 최대
// 최대의 종류를 고르기 위해서는 중복을 제외한 나머지에서 고르면 되므로, 중복 제거
// 중복 종류 제거한 수보다 가져갈 포켓몬 수를 비교
// 중복 종류 수가 아무리 많아도 nums.length/2 가 최대
// 중복 종류 수가 nums.length/2 보다 적다면 중복 종류 수가 최대

function solution(nums) {
  let newNums = [];
  let max = nums.length/2
  nums.map((_,idx) => newNums.includes(nums[idx]) ? nums[idx] : newNums.push(nums[idx]));
  return newNums.length > max ? max : newNums.length;
}

// 일반적으로 배열이나 객체의 중복 제거 시에는 Set 을 많이 사용
// 효율성을 떠나 다른 방법도 시도해보고 싶었음