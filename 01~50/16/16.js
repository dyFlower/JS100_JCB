let input = '로꾸꺼';

let answer = '';

for (let i = 1; i <= input.length; i++) {
    answer += input[input.length - i];
}

console.log(answer);

//해답지
//아 ㅋㅋㅋㅋㅋㅋ 아 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ진짜 !! 메소드를 잘 활용하자,,,!!!!!
const n = prompt('입력하세요.');

const reverseString = n.split('').reverse().join('');
/*
 * split() 메서드는 문자열을 배열로 만들어 반환하고,
 * reverse() 메서드는 배열의 순서를 반전하며,
 * join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
 */
console.log(reverseString);
