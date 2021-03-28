let n = window.prompt("Nhập số n: ");;

function Odd() {
    while (n > 0) {
        let temp = n % 10;
        // console.log("n%10", temp);
        if ((temp % 2) === 0) {
            return false;
        }
        n = parseInt(n / 10);
    }
    return true;
}
if (Odd()) {
    console.log("YES");
} else {
    console.log("NO");
}