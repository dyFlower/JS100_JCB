let input = '20 30 40';

let answer = 0;

input = input.split(' ').map(Number);

for (let i = 0; i < input.length; i++) {
    answer += input[i];
}

console.log(answer / input.length);

//해답지

const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;

for (let i = 0; i < 3; i++) {
    sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
}

console.log(Math.floor(sum / 3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.

//Math.floor 를 까먹었다.. 지문을 좀 더 꼼꼼히 읽어보자.
