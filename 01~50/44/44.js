let input1 = 18234;
let input2 = 3849;
let answer = 0;

function sum(input) {
    input = input.toString().split('').map(Number);
    for (let i = 0; i < input.length; i++) {
        answer += input[i];
    }
    console.log(answer);
}
//split을 사용할려면 문자열이여야 한다!! 숫자에 사용 못해,,, 주의할것!!

//해답지 답안

// let n = prompt('숫자를 입력하세요.');
// let sum = 0;

// while(n !== 0){
//   sum += (n % 10);
//   n = Math.floor(n/10);
// }

// console.log(sum);
//10으로 나누는 풀이 알고 있어서 split으로 풀어봤는데 답지 풀이가 더 좋은 것 같다,,,,
