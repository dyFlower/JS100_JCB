let input = 1000;
let answer = 0;

for (let i = 0; i <= 1000; i++) {
    answer += i
        .toString()
        .split('')
        .filter((v) => v === '1').length;
}
console.log(answer);
