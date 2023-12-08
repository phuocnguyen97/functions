let array1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let array2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function stars(arr) {
    let starArray1 = 0;
    let result = "";
    for(let i = 0; i < array1.length; i++) {
        if(arr == array1[i]) {
            starArray1 = i;
            for(let j = 0; j < array2.length; j++) {
                if (starArray1 == j) {
                    result = array2[j];
                    return result;
                } else {
                    result = "Không có chòm sao";
                    return result;
                }
            }

            } else {
                result = "Không tìm thấy tên ngôi sao";
                return result;
            }
        }
    }
    let a = prompt("Nhập vào tên ngôi sao");
    document.write(stars(a));




