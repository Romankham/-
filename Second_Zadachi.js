// //1
// var arr = ['a', 'b', 'c'];
// console.log(arr);

// //2
// console.log(arr[0], arr[1], arr[2]);

// //3
// var arr = ['a', 'b', 'c', 'd'];
// console.log(arr[0] + '+' + arr[1] + " " + arr[2] + '+' + arr[3]);

// //4
// var arry = [2, 5, 3, 9];
// var arry1 =  arry[0] * arry[1];
// var arry2 =  arry[2] * arry[3];
// var result = arry1 + arry2;
// console.log(result);

// //5
// var obj = {a: 1, b: 2, c: 3};
// console.log(obj['c']);
// console.log(obj.c);

//6
var obj = {Коля: '1000', Вася: '500', Петя: '200'};
console.log('Зп Пети: ' + obj['Петя']);
console.log('Зп Коли: ' + obj['Коля']);

//7
var arr = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
console.log(arr['5']);

//8
var day = 3;
console.log(arr[day]);

//9
var arry = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arry[1][0]);

//10
var obj2 = {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obj2.js[0]);

//11
var arry3 = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'eng': ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
};
// console.log(arry3['ru'][0]);
// console.log(arry3['eng'][2]);

//12
var lang = 'ru';
var day1 = 1;
console.log(arry3[lang][day1]);