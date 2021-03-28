let n = prompt("Nhập n: ");

function reverseNumber() {
    let reverse = 0; // số đảo
    let temp = n;
    while (n !== 0) {
        let surplus = n % 10; //số dư
        reverse = reverse * 10 + surplus;
        temp = temp / 10; // biến trung gian
    }
    if (reverse === n) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}
reverseNumber();