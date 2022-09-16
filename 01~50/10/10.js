let input = 5;
let answer = '';

for (let i = 0; i < input; i++) {
    i == 0 ? (answer += '') : (answer += '\n');

    for (let k = 1; k < input - i; k++) {
        answer += ' ';
    }

    for (let j = 0; j <= 2 * i; j++) {
        answer += '*';
    }
}

//해답지 풀이
console.log(answer);

const n = 5;
let tree = '';

for (let i = 1; i <= n; i++) {
    let star = '';
    for (let j = 1; j <= n - i; j++) {
        star += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star += '*';
    }
    tree += star + '\n';
}

console.log(tree);

//오호 한 줄씩 추가해서 tree에 넣었구나,,, 근데 마지막 공백이 출력되는게 맘에 안드는 풀이네 ,,
//내 풀이가 낫지 않나??? 흠,,
