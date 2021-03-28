// in ra tổng từ 1 đến n
let n = prompt("Nhập n:");

function sum() {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
sum();