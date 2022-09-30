let input = '10 9 8 7 6 5 4 3 2 1';
let answer = 0;
input = input.split(' ');

answer = Math.max(...input);

console.log(answer);

//해답지 답안
// let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
//     return parseInt(n, 10);
//   });

//   numbers.sort((a, b) => {
//     return b-a;
//   });

//   console.log(numbers[0]);
