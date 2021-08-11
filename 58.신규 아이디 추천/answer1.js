function solution(new_id) {
  let reg = /[^\w-.]/g

  let lv4 = new_id.toLowerCase()
  .replace(reg,'')
  .replace(/\.{2,}/g, '.')
  .replace(/^\./g, '').replace(/\.$/g, '')


  let lv6 = lv4.length === 0 ? 'a' : lv4.length >= 16 ? lv4.substr(0,15).replace(/\.$/g,'') : lv4;

  if (lv6.length <= 2) {
      while (lv6.length < 3) {
          lv6 += lv6[lv6.length - 1]
      }
      return lv6
  }
  return lv6
}

// 제시된 단계 순서대로 진행
// 정규표현식을 전체적으로 한 번 훑을 수 있는 기회였음