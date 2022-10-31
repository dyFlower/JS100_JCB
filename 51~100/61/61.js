input = 'aaabbbbcdddd'.split('');
inputSet = [...new Set(input)];
let answer = [];
for (let i of inputSet) {
  answer.push(i);
  answer.push(input.filter((v) => v === i).length);
}
console.log(answer.join(''));
