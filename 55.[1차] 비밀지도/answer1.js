// 배열을 2진법으로 바꾸고 각 요소의 자릿수를 n 개로 맞추는 함수 만듦
// 각 함수에 배열과 n 을 넣어 새로운 배열을 만듦
// 새로운 두 배열의 원소들을 순회하면서 원소의 각 자리의 합을 구하여 새로운 배열을 만듦
// 배열의 원소들 내의 숫자가 0이면 공백 처리, 1이상이면 # 처리하여 배열로 리턴

function solution(n, arr1, arr2) {

  function newArr(arr, n) {
      let toStr = arr.map(el => el.toString(2))
      for (let i = 0; i < toStr.length; i++) {
          let blank = '';
          for (let j = 0; j < n - toStr[i].length; j++) {
              blank += '0'
          }
          toStr[i] = blank + toStr[i];
      }
      return toStr;
  }

  let newArr1 = newArr(arr1, n); 
  let newArr2 = newArr(arr2, n); 

  let sumArr = newArr1.map((x,y)=> String(Number(x) + Number(newArr2[y]))); 
  let newSumArr = newArr(sumArr, n);
  return newSumArr.join('-').replace(/2/g, '#').replace(/1/g, '#').replace(/0/g, ' ').split('-')
  
}

// 비트 연산자 공부 전 풀이
// 비트 연산자로 푸는 문제라고 하여 답안 2.를 새로 작성