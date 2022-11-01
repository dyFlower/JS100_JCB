let input = 24;
let cnt = 0;

function move(num) {
  cnt += Math.floor(input / num);
  input = input % num;
}
move(7);
move(3);

cnt = input !== 0 ? -1 : cnt;

console.log(cnt);
