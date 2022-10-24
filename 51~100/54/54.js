let input = '1 4 2 6 3'
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

function consecute(input) {
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i + 1] - input[i] != 1) {
            return 'NO';
        }
    }
    return 'YES';
}
console.log(consecute(input));
