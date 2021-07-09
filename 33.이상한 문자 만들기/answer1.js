function solution(s) {
  return s.split(' ').map(word => {
    let answer = '';
    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            answer += word[i].toUpperCase();
        } else {
            answer += word[i].toLowerCase();
        }
    }
    return answer;
  }).join(' ')
}