let string = prompt("Nhập chuỗi: ");

function countSpace() {
    let count = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string[i] == ' ') {
            count++;
        }
    }
    console.log(count);
}
countSpace();