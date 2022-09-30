let input = '176 156 155 165 166 169';
let inputSorted = input
    .split(' ')
    .sort((a, b) => a - b)
    .join(' ');
inputSorted === input ? console.log('YES') : console.log('NO');
