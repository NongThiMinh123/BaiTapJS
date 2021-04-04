//12. Hãy remove tất cả khoảng trắng, space và‘ enter’ trong một chuỗi
// VD: “Hello world”, output: “Helloworld”

let string = prompt("Nhập chuỗi: ");

function deleteSpace() {
    let string1 = string.split(' ').join('');
    console.log(string1);

}
deleteSpace();