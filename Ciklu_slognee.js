document.write('<br>');
// //1
// var str = '';
// for (var i = 1; i < 10; i++) {
//     str = str + i;
// }
// console.log(str);

// //2
// var str2 = '';
// for (var i = 9; i > 0; i--) {
//     str2 = str2 + i;
// }
// console.log(str2);

// //3
// var str3 = '';
// for (var i = 1; i <= 9; i++) {
//     str3 = str3 + i + '-';
// }
// console.log('-' + str3);

// //4
// var str4 = '';
// for (var i = 0; i < 20; i++) {
//     str4 = str4 + 'x';
//     document.write(str4 + '<br>');
// }

// //5
// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write(i);
//     }
//     document.write('<br>');
// }

// //6
// var str6 = '';
// for (var i = 1; i <= 5; i++) {
    
//     for (var j = 1; j <= 2; j++) {
//         str6 = str6 + 'x';
//     }
//     document.write(str6 + '<br>');
// }

//Задачи на приемы работы с массивами
//1
var arr1 = [];
var str11 = '';
for (var i = 0; i < 5; i++) {
    str11 = str11 + 'x';
    arr1[i] = str11;
}
console.log(arr1);

//2
var arr2 = [];

for (var i = 1; i < 5; i++) {
    for (var j = 1; j <= i; j++) {
        arr2[i] = i;
        document.write(arr2[i]);
    }
    document.write('<br>');
}

//3
function arrayFill (znachZapol, kolvoElem) {
    arr3 = [];
    for (var i = 0; i <= kolvoElem; i++) {
        arr3[i] = znachZapol;
    }
    return arr3;
}

console.log(arrayFill('x', 4));

//4
var arr4 = [5, 5, 3, 4, 5];
var result4 = 0;

for (var i = 0; i <= arr4.length-1; i++) {
    result4 += arr4[i];
    if (result4 === 10) {
        var n = i + 1;
        console.log('Chtobu poluchilos 10, nyzhno cloguty ctolko: ' + n);
    } 
}

//5
var arr5 = [3, 4, 2, 5, 6, 7];
var result5 = [];

for (var i = arr5.length-1; i >= 0; i--) {
    result5.push(arr5[i]);
}
console.log(result5);

//6
var arr6 = [[1, 2, 3], [4, 5], [6]];
var result6 = 0;

for (var i = 0; i < arr6.length; i++) {
    for (var j = 0; j < arr6[i].length; j++) {
        result6 += arr6[i][j];
    }
}
console.log(result6);

//7
var arr7 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var result7 = 0;

for (var i = 0; i < arr7.length; i++) {
    for (var j = 0; j < arr7[i].length; j++) {
        for (var k = 0; k < arr7[i][j].length; k++) {
            result7 += arr7[i][j][k]; 
        }
    }
}
console.log(result7);