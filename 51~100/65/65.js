let a = [1, 2, 3, 4];
let b = ['a', 'b', 'c', 'd'];

let c = new Array(a.length).fill('').map((_, i) => {
  if (i % 2 === 0) {
    return [a[i], b[i]];
  } else {
    return [b[i], a[i]];
  }
});
console.log(c);
