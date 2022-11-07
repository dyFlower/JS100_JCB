const n = 6;
const k = 3;
let sadGirin = 0;

let table = new Array(n).fill(1).map((v, i) => v + i);

while (table.length > 2) {
    console.log(sadGirin);
    if (sadGirin > table.length - 1) {
        sadGirin -= table.length;
    }
    table.splice(sadGirin, 1);
    sadGirin = sadGirin + k - 1;
}
console.log(table);
