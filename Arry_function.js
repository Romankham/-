// //1
// var a = ['1', '2', '3'];
// var b = ['4', '5', '6'];
// var c = a.concat(b);
// console.log(c);

// //2
// var x = [1, 2, 3];
// x.reverse();
// console.log(x);

// //3
// var n = [1, 2, 3];
// n.push(4, 5);
// console.log(n);

// //4
// var num = [1, 2, 3];
// num.unshift(4, 5, 6);
// console.log(num);

// //5
// var sj = ['js', 'css', 'jq'];
// var elemFirst = sj.shift();
// console.log(elemFirst);

// //6
// var elemLast = sj.pop();
// console.log(elemLast);

// //7
// var number = [1, 2, 3, 4, 5];
// var sliceFirst = number.slice(0, 3);
// console.log(sliceFirst);

// //8
// var sliceSecond = number.slice(3, 5);
// console.log(sliceSecond);

// //9
// //10
// //11
// //12
// var nums = [1, 2, 3, 4, 5];

// // nums.splice(1, 2);
// // console.log(nums);

// // var numSplice = nums.splice(1, 3);
// // console.log(numSplice);

// // nums.splice(3 , 0, 'a', 'b', 'c');
// // console.log(nums);

// nums.splice(1, 0, 'a', 'b');
// nums.splice(6, 0, 'c');
// nums.splice(8, 0, 'e');
// console.log(nums);

// //13
// var arrSort = [3, 4, 1, 2, 7];
// console.log(arrSort.sort());

// //14
// var obj = {js:'test', jq: 'hello', css: 'world'};
// console.log(Object.keys(obj));

// //Отработка 
// //1
// var strOne = 'abcd';
// console.log(strOne[0].toUpperCase() + strOne.slice(1));

// // //Мой способ - возможно не совсесм правильный
// // var arrStrOne = strOne.split('', 4);
// // var arrUpper = arrStrOne[0].toUpperCase();
// // arrStrOne.shift();
// // console.log(arrUpper + arrStrOne.join(''));

// var arrStrOne = strOne.split('', 4);
// arrStrOne[0] = arrStrOne[0].toUpperCase();
// var strResult = arrStrOne.join('');
// console.log(strResult);

// //2
// var str = '123456';
// var result = str.split('').reverse().join('');
// console.log(result);

// //3
// var strProv = 'http://asdv';
// if (strProv.substr(0, 7) == 'http://') {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// //4
// var strPr = 'gfdsg.html';
// if (strPr.substr(-5) == '.html'){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// //Простые функции
// //1
// function kvadr(chislo) {
//     return chislo *= chislo;
// }
// console.log(kvadr(3));

// //2
// function sum(chislo1, chislo2) {
//     return chislo1 += chislo2;
// }
// console.log(sum(2, 3));

// //3
// function del(chis1, chis2, chis3) {
//     var result = (chis1 - chis2) / chis3;
//     return result;
// }
// console.log(del(6, 2, 2));

// //4
// function mes(day) {
//     if (day >= 1 && day <= 7) {
//         var naz = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//         return naz[day-1];
//     }
//     else {
//         return console.log('Такого дня нет: ' + day);
//     }
// }
// console.log(mes(2));

//Флаги
//1
var arr = [1, 2, 3, 4, 5];
var flag = false;

// for (var i = 0; i <= arr.length; i++) {
//     if (arr[i] == 5) {
//         flag = true;
//         break;
//     }
// }

// if (flag === true) {
//     console.log(flag);
// }else {
//     console.log(flag);
// }

//2
var num = 31;
var flags = false;
for (var i = 2; i <= num-1; i++) {
    if (i % num == 0) {
        flags = true;
        return flags;
    }
}

if (flags === true) {
    console.log(flags);
}else {
    console.log(flags);
}

//3
var arrs = [1, 2, 3, 3, 5, 6];
var flagss = false;
for (var i = 0; i <= arrs.length; i++) {
    if (arrs[i] === arrs[i-1]) {
        flagss = true;
        break;
    }
}

if (flagss === true) {
    console.log('Da');
}else {
    console.log('Net');
}

//Логические значения
//1
function firstFunc (num1, num2) {
    return num1 == num2;
}

console.log(firstFunc(2, 3));

//2
function secondFunc (num3, num4) {
    return num3 + num4 > 10;
}

console.log(secondFunc(5, 4));

//3
function thirdFunc (num5) {
    return num5 < 0;
}

console.log(thirdFunc(5));