let n = prompt("Nhập n : ");

function odd() {
    for (let i = 1; i <= n; i++) {
        if ((i % 2) !== 0) {
            console.log(i);
        }
    }
}
odd();