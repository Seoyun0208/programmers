function solution(price, money, count) {
  return money - price * count * (count+1) / 2 >= 0 ? 0 : Math.abs(money - price * count * (count+1) / 2)
}

// 1 + 2 + 3 + ....+ n 까지의 합을 구하는 가우스의 공식(=등차수열의 합 공식) 사용