let input1 = 'querty';
let input2 = 'hqllo my namq is hyqwon';
function revise(input) {
    input = input.replaceAll('q', 'e');
    console.log(input);
}
revise(input1);
revise(input2);

//해답지 풀이
//1. 함수 사용
// const word = prompt('입력하세요.');

// function replaceAll(str, searchStr, replaceStr) {
//     return str.split(searchStr).join(replaceStr);
// }

// console.log(replaceAll(word, 'q', 'e'));

//2. 정규식 사용
// const word = prompt('입력하세요.');

// console.log(word.replace(/q/gi, 'e'));
