let userName = prompt("Nhập họ tên: ");

function normalizeName(userName) {
    userName = userName.toLowerCase();
    for (let i = 0; i <= userName.length; i++) {
        if ((userName.charAt(i - 1) === ' ')) {
            userName = userName.charAt(0).toUpperCase() +
                userName.slice(1, i - 1) + ' ' +
                userName.charAt(i).toUpperCase() +
                userName.slice(i + 1);
        }
    }
    return userName;
}
console.log(normalizeName(userName));