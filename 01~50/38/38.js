let input = '97 86 75 66 55 97 85 97 97 95'
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
    .reverse();
let grade = 1;
let cnt = 0;

for (let i = 0; i < input.length; i++) {
    if (grade !== 4) {
        if (input[i] !== input[i + 1]) {
            grade += 1;
        }
        cnt++;
    } else {
        break;
    }
}

// 해설지 답안
// const scores = prompt('점수입력').split(' ').map(function(n){
//     return parseInt(n, 10);
//   });

//   scores.sort((a, b) => {
//     return a-b;
//   });

//   let count = 0;
//   let arr = [];

//   while (arr.length < 3) {
//     let n = scores.pop();
//     if (!arr.includes(n)){
//       arr.push(n);
//     }
//     count += 1;
//   }

//   console.log(count);
