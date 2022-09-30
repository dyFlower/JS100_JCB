let input = 'AAABBBcccddd';

let answer = '';

for (let i = 0; i < input.length; i++) {
    if (input[i].toUpperCase() == input[i]) {
        answer += input[i].toLowerCase();
    } else {
        answer += input[i].toUpperCase();
    }
}
console.log(answer);

//해답지 답안
// let a = prompt('문자열을 입력하세요.');
// let b = [];
// let s = '';

// for (let i=0; i<a.length; i++){
// 	//toLowerCase() 메서드는 문자열을 소문자로, toUpperCase() 메서드는 문자열을 대문자로 변환하여 반환합니다.
//   if(a[i] === a[i].toLowerCase()){
//     b.push(a[i].toUpperCase());
//   } else {
//     b.push(a[i].toLowerCase());
//   }
// }

// for (let j=0; j<b.length; j++){
//   s += b[j];
// }

// console.log(s);
