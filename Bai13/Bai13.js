let string = prompt("Nhập xâu S: ");

function stringReverse() {
    let string1 = string.split('');
    let string2 = string1.reverse().join('');
    console.log(string2);
}
stringReverse();