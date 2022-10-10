let input = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'.split(' ');
let obj = {};
let answer = '';

//객체를 만듭니다.
for (let i in input) {
    obj[input[i]] = 0;
}
//인풋값에 따라 밸류에 1씩 더해줘요
for (let i in input) {
    obj[input[i]]++;
}
//이게 투표 가장 많이 받은 사람 찾는 줄입니다.
answer = Object.keys(obj).filter((a) => obj[a] == Math.max(...Object.values(obj)));

answer = Object.keys(obj).filter(function (a) {
    return obj[a] == Math.max(...Object.values(obj));
});

console.log(`${answer} ${obj[answer]}표로 반장됨`);
