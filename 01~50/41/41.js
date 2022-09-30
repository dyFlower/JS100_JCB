let testInput = 23;
let answer = '';

for (let i = 2; i < testInput; i++) {
    if (testInput % i === 0) {
        answer = 'NO';
        break;
    } else {
        answer = 'YES';
    }
}
console.log(answer);

//해답지 답안
// const num = prompt('숫자를 입력하세요.');

// function check_prime(num) {
//   for (let i=2; i<num; i++) {
//     const result = num % i;
//     if (result === 0) {
//       console.log('NO');
//       return false;
//     }
//   }
//   if (num === 1) {
//     console.log('NO');
//     return;
//   }
//   console.log('YES');
// }

// check_prime(num);
