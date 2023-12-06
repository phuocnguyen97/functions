// function number(x) {
//     let y = x + 1;
//     return y;
// }
// let num = number(5);
// console.log(num);

function number(a) {
    alert(arguments[0] + 1);
}
let a = +prompt("Nhập số: ");
number(a);