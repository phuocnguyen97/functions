function number(x, y) {
    if(x > y) {
        alert(`Số thứ nhất lớn hơn số thứ hai`);
    } else if (x <= y) {
        alert(`Tổng là ${x + y}`);
    }
    return number;
}
let x = +prompt("Nhập số thứ nhất: ");
let y = +prompt("Nhập số thứ hai: ");
number(x, y);
