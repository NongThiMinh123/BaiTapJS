let n = prompt("Nhập n: ");

function even() {
    for (let i = 1; i <= n; i++) {
        if ((i % 2) === 0) {
            console.log(i);
        }
    }
}
even();