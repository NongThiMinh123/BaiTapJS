//Tính min và max của 3 số min(2,45,5)=2;
let arrayNumber = [2, 5, 3, 3, 1, 0, 35, 7];

function min_max() {
    let min, max;
    for (let i = 0; i <= arrayNumber.length; i++) {
        if (arrayNumber[i] < arrayNumber[i + 1]) {
            min = arrayNumber[i];
        }
        if (arrayNumber[i + 1] > arrayNumber[i]) {
            max = arrayNumber[i + 1];
        }
    }
    console.log("min: ", min, "\nmax: ", max)
}
console.log(min_max());