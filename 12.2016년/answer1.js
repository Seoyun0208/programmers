function solution(a, b) {
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let date = new Date(`2016-${a}-${b}`);
  return days[date.getDay()];
  }