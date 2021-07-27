function solution(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push((arr[i-2] + arr[i-1]) % 1234567)
  }
  return arr[arr.length-1];
}

// 자료형의 크기에 제한이 있는 언어를 쓸 경우 
// (A + B) % C ≡ ( ( A % C ) + ( B % C) ) % C 라는 성질을 이용해서 
// 매번 계산 결과에 1234567으로 나눈 나머지를 대신 넣는 것으로 
// int 범위 내에 항상 값이 존재함을 보장할 수 있다는 것을 알게 됨