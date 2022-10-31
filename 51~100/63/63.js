input = '복잡한 세상 편하게 살자'.split(' ');
let answer = [];
for (i of input) {
  answer.push(i[0]);
}
console.log(answer.join(''));
