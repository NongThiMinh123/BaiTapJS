let string1 = prompt("nhập chuỗi s1");
let string2 = prompt("nhập chuỗi s2");

function possition(string1, string2) {
    // console.log(string1);
    // console.log(string2);
    // let index = 0;
    // let split1 = string1.split(' ');
    // let split2 = string2.split(' ');
    // for (let i = 0; i <= split1.length; i++) {
    //     for (let j = 0; j <= split2.length; j++) {
    //         if (split1[i] == split2[0]) {
    //             index = i;
    //             break;
    //         }
    //     }
    // }
    // console.log(index);
    //có thể sử dụng indexOf() hoặc search()
    // let indexOfString2 = string1.indexOf(string2);
    let indexOfString2 = string1.search(string2);

    console.log("Vị trí xuất hiện của chuỗi s2 trong chuỗi s1: ", indexOfString2);
}
possition(string1, string2);