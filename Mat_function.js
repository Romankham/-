// //1
// var a = 10;
// var b = 3;
// console.log(a % b);

// //2
// if (a % b) {
//     console.log('Делится с остатком' + ' ' + (a % b));
// }
// else {
//     console.log('Делится без остатка' + ' ' + (a / b));
// }

// //3
// var st = Math.pow(2, 10);
// console.log(st);

// //4
// var kor = Math.sqrt(245);
// console.log(kor);

// //5
// var arr = [4, 2, 5, 19, 13, 0, 10];
// var kub = 0;
// for (var i = 0; i < arr.length; i++) {
//     kub += Math.pow(arr[i], 3);
//     // console.log(kub);
//     if (i == 6) {
//         console.log(Math.sqrt(kub));
//     }
// }

// //6
// var okr = Math.sqrt(379);
// console.log(okr);
// console.log('Целое: ' + okr.toFixed(0));
// console.log('Десятые: ' + okr.toFixed(2));
// console.log('Сотые: ' + okr.toFixed(3));

// //7
// var kvadKor = Math.sqrt(587);
// let obj = {
//     floor: Math.floor(kvadKor),
//     ceil: Math.ceil(kvadKor)
// };
// console.log(obj.floor);
// console.log(obj.ceil);

// //8
// console.log('Min: ' + Math.min(4, -2, 5, 19, -130, 0, 10));
// console.log('Max: ' + Math.max(4, -2, 5, 19, -130, 0, 10));

// //9
// function getRandomInt (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// // console.log(getRandomInt(1, 100));

// //10
// var arry = [];
// for (var i = 0; i < 5; i++) {
//     arry[i] = Math.floor(Math.random() * (10 - 1 + 1) +1);
//     console.log(arry[i]);
// }

// //11
// var a = 10;
// var b = -5;
// console.log(Math.abs(a));
// console.log(Math.abs(b));

//12
var a = 6;
var b = 1;
var c = Math.abs(a - b);
console.log(c);

//13
var arr = [12, 15, 20, 25, 59, 79];
var sred = 0;
for (var i = 0; i < arr.length; i++) {
    sred += arr[i];
    // console.log(sred);
    if(i == 5) {
        console.log(sred / 6);
    }
}

//14
function factorial (n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(4));
