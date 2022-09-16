let input = '10 3';

input = input.split(' ').map(Number);

let answer1 = Math.floor(input[0] / input[1]);
let answer2 = input[0] % input[1];

console.log(answer1, answer2);
