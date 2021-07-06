function solution(arr1, arr2) {
  return arr1.map((num1, idx1) => 
                        num1.map((num2, idx2) =>
                                 num2 + arr2[idx1][idx2]));
}