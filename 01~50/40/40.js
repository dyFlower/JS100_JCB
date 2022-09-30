let weight = 50;
let num = 5;
let weightPeople = [20, 20, 20, 20, 20];
let cnt = 0;

for (let i = 0; i < num; i++) {
    weight -= weightPeople[i];
    cnt++;
    if (weight < 0) {
        console.log(--cnt);
        break;
    }
    if (i === num - 1 && weight >= 0) {
        console.log(cnt);
    }
}

//해답지 답안

// let total = 0;
// let count = 0;
// const limit = prompt('제한 무게를 입력하세요.');
// const n = prompt('인원수를 입력하세요.');

// for (let i=1; i<=n; i++){
//   total += parseInt(prompt('무게를 입력해주세요.'), 10);
//   if (total <= limit){
// 		count = i;
//   }
// }

// console.log(count);
//입력받는 것과 인풋으로 넣는 것과 코드의 차이가 있겠군,,, 그리고 굳이 cnt를 선언하지 않고 i를 출력해도 되겠구나!!
