// tính giai thừa của môt số nguyên:
// 5! = 1*2*3*4*5
function tinhGiaiThua(number) {
    let ketqua = 1;
    for (let i = 1; i <= number; i++) {
        ketqua *= i;
    }
    return ketqua;

}
let number = parseInt(prompt("Nhập vào số để tính giai thừa: "));
let num = tinhGiaiThua(number);
alert(`Giai thừa của ${number} là ${num}`);