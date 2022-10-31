function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
        for (j = 0; j < result.length - i; j++) {
            if (result[j] > result[j + 1]) {
                let box = result[j];
                result[j] = result[j + 1];
                result[j + 1] = box;
            }
        }
    }
    return result;
}

const items = prompt('입력해주세요.')
    .split(' ')
    .map((n) => {
        return parseInt(n, 10);
    });

console.log(bubble(items));

//해답지 답안

// function bubble(arr) {
//     let result = arr.slice(); // 원본 배열 복사

//     for (let i = 0; i < result.length - 1; i++) {
//       for (let j = 0; j < result.length - i; j++) {
//         if (result[j] > result[j + 1]) {
//           let temp = result[j];
//           result[j] = result[j+1];
//           result[j+1] = temp;
//         }
//       }
//     }
//     return result;
//   }

//   const items = prompt('입력해주세요.').split(' ').map((n) => {
//     return parseInt(n, 10);
//   });

//   console.log(bubble(items));