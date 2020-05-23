// //1
// var i = 1;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// for (var i = 0; i <= 100; i++) {
//     console.log(i);
// }

// //2
// for (var i = 11; i <= 33; i++) {
//     console.log(i);
// }

// //3
// for (var i = 1; i <= 100; i++) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }

//4
var sum = 1;
for (i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//5
// var arr = [1, 2, 3, 4, 5];

// for (i = 1; i <= arr.length; i++) {
//     console.log(i);
// }

// //6
// var arr = [1, 2, 3, 4, 5];
// var result = 0;
// for (i = 0; i <= arr.length-1; i++) {
//     result += arr[i];
// }
// console.log(result);

// //7
// var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
// for(keys in obj) {
//     console.log(keys + '-' + obj[keys]);
// }

// //8
// var obj = {Коля:'200',Вася:'300',Петя:'400'};
// for(key in obj) {
//     console.log(key + ' - зарплата ' + obj[key] + ' долларов');
// }

// //9
// var arr = [2, 5, 9, 15, 0, 4];
// for (var i = 0; i <= arr.length-1; i++) {
//     if(arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i]);
//     }
// }

// //10
// var arry = [2, -5, 9, -15, 0, 4];
// for(var i = 0; i <=arry.length-1; i++){
//     if(arry[i] >= 0) {
//         console.log(arry[i]);
//     }
// }

// //11
// var arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for(var i = 0; i <=arr.length-1; i++) {
//     if(arr[i] == 4) {
//         console.log('Есть!');
//         break;
//     }
// }

// //12 Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
// //Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// var arr = [10, 20, 30, 50, 235, 3000];
// for (i in arr) {
//     let chr = Math.abs(arr[i]).toString()[0];
//     if (chr === '1' || chr === '2' || chr === '5') { console.log(arr[i]); }
// }

// //13 Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var a = ' '; 
// for(var i = 0; i < arr.length; i++) {
//     a +='-' + arr[i];
// }
// console.log(a + '-');

// //14 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
// var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// for (var i = 0; i < arr.length; i++) {
//     if(i < 5 ) {
//         document.write(arr[i] + ' ');
//     }
//     else {
//         document.write('<strong>'+ arr[i] + '</strong>' + ' ');
//     }
// }

//15
var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
var day = arr[2];
for (var i = 0; i < arr.length; i++) {
    if (i == 3) {
        document.write('<strong>'+ day +'</strong>' + ' ');
    }   
    if (i < 2 || i > 2) {
        document.write(arr[i] + ' ');
    }
}

//16
var n = 1000;
var num = 0;
for (var i = 0; i < n; i++) {
    if(n > 50) {
        n = n / 2;
        num = i;
        console.log(num);
        console.log(n);
    }
    else {break;}
}