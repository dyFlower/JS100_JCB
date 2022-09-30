let a = 5;
let b = 24;

let date = new Date(`2020-${a}-${b}`);
switch (date.getDay()) {
    case 0:
        console.log('일');
        break;
    case 1:
        console.log('월');
        break;
    case 2:
        console.log('화');
        break;
    case 3:
        console.log('수');
        break;
    case 4:
        console.log('목');
        break;
    case 5:
        console.log('금');
        break;
    case 6:
        console.log('토');
        break;
}

//해답지 답안
// const month = prompt('월을 입력하세요.');
// const date = prompt('일을 입력하세요.');

// function solution(a,b){
//     const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

//     const x = new Date('2020-'+a+'-'+b);
//     return day[x.getDay()];
// }
// console.log(solution(month, date));

//아 배열 쓰면 더 가독성이 좋구나,,,, mistake,,,
