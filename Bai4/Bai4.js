//Bai4: Viết chương trình in ra là các số nguyên tố trong khoảng từ 1 đến n
let n = prompt("Nhập n: ");


function primeNumber() {
    if (n < 2) {
        console.log("Không có số nguyên tố nào");
    } else {
        for (let i = 2; i <= n; i++) {
            let count = 0;
            for (let j = 1; j <= i; j++) {
                if ((i % j) === 0) {
                    count++;
                }

            }
            if (count === 2) {
                console.log(i);
            }
        }
    }
}
primeNumber();