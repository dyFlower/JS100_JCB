let input = '()()('.split('');
let stack = [];

function check() {
    for (i of input) {
        if (i === '(') {
            stack.push(i);
        } else if (i === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    if (stack.length !== 0) {
        return false;
    }
}
console.log(check());
