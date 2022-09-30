let input = 20;
let box = '';
let answer = 0;
for (let i = 1; i <= input; i++) {
    box += i.toString();
}

box = box.split('');

for (let i = 0; i < box.length; i++) {
    answer += parseInt(box[i]);
}
console.log(answer);

//해답지 답안
// let arr = [];
// let sum = 0;

// for (let i=0; i<20; i++){
//   arr[i] = i+1;
// }

// arr.forEach((n) => {
//   while(n !== 0){
//     sum += (n % 10);
//     n = Math.floor(n/10);
//   }
// })

// console.log(sum);
