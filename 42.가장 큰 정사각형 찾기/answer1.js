// max 는 한 변의 길이, col 은 열의 길이, row 는 행의 길이에 해당

// 특정 자리의 숫자 기준으로 좌, 좌상, 상을 비교해야 하므로 
// 2행 또는 2열 미만인 경우와 2행, 2열 이상인 경우로 나뉨

// 1. 2행 또는 2열 미만인 경우
// 행이 아무리 길어도 열이 1이거나 열이 아무리 길어도 행이 1이라는 뜻이므로
// 정사각형의 최대값은 1뿐!
// 따라서 배열 내에서 하나라도 1이 나오면 무조건 1 리턴

// 2. 2행, 2열 이상인 경우
// 특정 자리의 숫자가 1이라면 해당 자리를 기준으로 좌, 좌상, 상을 확인해야 하므로
// 0 인덱스에 해당하는 행과 열은 제외, 인덱스 기준 (1, 1)부터 확인
// 좌, 좌상, 상 중 최소값에 + 1을 더한 값을 특정 자리의 숫자로 변경
// 변경된 특정 자리의 숫자와 max 값을 비교하여 더 큰 값을 max 로 저장 
// 반복문을 통해 끝까지 진행 후 나온 max 값을 제곱하여 너비를 리턴

function solution(board) {
  let max = 0;
  let col = board[0].length;
  let row = board.length;

  if (row < 2 || col < 2) {
      for (let i = 0; i < row; i++) {
          for (let j = 0; j < col; j++) {
              if (board[i][j] === 1) {
                  return 1;
              }
          }
      }
  }
  for (let i = 1; i < row; i++) {
      for (let j = 1; j < col; j++) {
          if (board[i][j] === 1) {
              board[i][j] = Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + 1;
              if (board[i][j] > max) {
                  max = board[i][j]
              }
          }
      }
  }
return Math.pow(max,2);
}