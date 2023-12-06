// cú pháp tạo hàm

// function writeLog() { // writeLog là tên hàm
//     console.log("Hello world"); // nhiệm vụ của hàm
// }

// function writeLog2(hai, hello, str) {
//     console.log(hai);
// }

// writeLog("Hải");
// writeLog2("Hải");

// Viết hàm tính tổng 2 số a và b
// param: a và b
// return: a + b

// function sum(a, b) {
//     let c = a + b;
//     return c;
// }

// // gọi hàm
// let resut = sum(10, 20);

// console.log(resut);
// console.log(5, 10);

// viết chhuowng trình có hàm có return
// function sum(n) {
//     let total = 0;
//     for(let i = 0; i < n; i++) {
//         if(i % 2 != 0) {
//             total += i;
            
//         }
//     }
//     return total;
// }
// console.log(sum(10));


// viết chương trình ko có tham số ko có console.log
// function num() {
//     let a = 10;
//     let total = 0;
//     for(let i = 0; i < n; i++) {
//         if(i % 2 != 0) {
//             total += i;
            
//         }
//     }
//     console.log(total);
    
// }

// viết chương trình có tham số ko có console.log

// function num(n) {
//     let total = 0;
//     for(let i = 0; i < n; i++) {
//         if(i % 2 != 0) {
//             total += i;
//         }
//     }
//     console.log(total);
// }
// num(10);


// // 4!
// // 1*2*3*4
// // tính giai thừa của một số bằng hàm

// function tinhGiaiThua(number) {
//     let ketqua = 1;
//     for (let i = 1; i <= number; i++) {
//         ketqua *= i;
//     }
//     return ketqua;
// }
// let giaithua = tinhGiaiThua(10);
// console.log(giaithua);

// tính bình phương của một số: 

function square(number) {
    let ketqua = number * number;
    return ketqua;
}
// let num = square(2);
// document.write(`Bình phương của 2 là ${num}` + "<br>");

// let numof5 = square(5);
// document.write(`Bình phương của 5 là ${numof5}`);
function calculate() {
    let input = document.getElementById("input").value;
    let result = square(input);
    document.getElementById("result").innerHTML = result;
}

