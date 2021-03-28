//tổng lẻ từ 1 đến n
let n = prompt("Nhập n");

function sumOdd() {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if ((i % 2) !== 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}
sumOdd();