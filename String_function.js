//1
var str1 = 'js';
console.log(str1.toUpperCase());

//2
var str2 = 'JS';
console.log(str2.toLowerCase());

//3
var str3 = 'я учу javascript!';
console.log(str3.length);

//4
var str4 = 'я учу javascript!';
console.log(str4.substr(2 , 3));
console.log(str4.substring(2, 5));
console.log(str4.slice(2 , 5));

//5
var str5 = 'я учу javascript!';
console.log(str5.indexOf('учу'));

//6
var str6 = 'Учу ушу руками машу';
var n = 5;
if (str6.length > n) {
    var result = str6.substr(0, n) + '...';
}
else {
    result = str6;
}
console.log(result);

//7
var str7 = 'Я-учу-javascript!';
console.log(str7.replace(/-/g , '!'));

//8
var str8 = 'я учу javascript!';
var arr8 = str8.split(' ', 3);
console.log(arr8);

//9
var str9 = 'я учу javascript!';
console.log(str9.split(''));

//10
var date = '2025-12-31';
var result10 = date.split('-', 3).reverse().join('.', 3);
console.log(result10);

//11
var arr11 = ['я', 'учу', 'javascript', '!'];
console.log(arr11.join('+' , 3));

//12
var str12 = 'abcde';
console.log(str12[0].toUpperCase() + str12.slice(1));

//13 Преобразуйте первую букву каждого слова строки в верхний регистр.
var str13 = 'abc def hrg';
var firstSplit = str13.split(' ');

for (var i = 0; i < firstSplit.length; i++) {
        firstSplit[i] = firstSplit[i].slice(0 , 1).toUpperCase() + firstSplit[i].slice(1); //Запомнить
}

var goJoin = firstSplit.join(' ');
console.log(goJoin);

//14 Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
var str14 = 'var_test_text';
var arrSplit = str14.split('_' , 3);
for (var i = 0; i < arrSplit.length; i++) {
    if (arrSplit[0] != arrSplit[i]) {
        arrSplit[i] = arrSplit[i].slice(0, 1).toUpperCase() + arrSplit[i].slice(1);
    }
}

var resultJoin = arrSplit.join('');
console.log(resultJoin);
