// 최대 : lottos 중 win_nums 와 일치하는 것 개수 + 0 개수 
// 최소 : lottos 중 win_nums 와 일치하는 것 개수
// rank 배열을 만들어서 개수와 rank 배열의 인덱스가 일치할 때 값을 리턴

function solution(lottos, win_nums) {
  const minCount = lottos.filter(num => win_nums.includes(num)).length; 
  const zeroCount = lottos.filter(x => !x).length 
  const rank = [6, 5, 4, 3, 2, 1];

  return [rank.indexOf(minCount + zeroCount -1), rank.indexOf(minCount-1)].map((el) => el === -1 ? 6: el)
}

// 처음에 rank.indexOf(minCount-1) 의 값이 rank 배열의 범위를 벗어나서, 벗어나는 값들은 낙첨에 해당하므로 6이 리턴되게끔 수정