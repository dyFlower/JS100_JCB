let input = 2;
let answer = '';

for (let i = 1; i <= 9; i++) {
    answer += input * i;
    if (i == 9) {
        continue;
    }
    answer += ' ';
}

console.log(answer);
