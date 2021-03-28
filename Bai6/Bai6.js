let n = prompt("Nhập n : ");

function sumSquare() {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + Math.pow(i, 2);
    }
    console.log(sum);
}
sumSquare();