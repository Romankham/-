// //1
// var a = '1';
// if (a == 0){
//     console.log('True');
// } else {console.log('False');}

// //2
// if (a > 0) {
//     console.log('True');
// } else {console.log('False');}

// //3
// if (a >= 0) {
//     console.log('True');
// } else {console.log('False');}

// //4
// if (a == 'test') {
//     console.log('True');
// } else {console.log('False');}

// //5
// if (a === '1') {
//     console.log('True');
// } else {console.log('False');}

////6
// var test = false;
// if(test == true) {
//     console.log('True');
// } else {console.log('False');}

// if(test) {
//     console.log('True');
// } else {console.log('False');}

// if(!test) {
//     console.log('True');
// } else {console.log('False');}

// //7
// var a = 2;
// if(a > 0 && a < 5) {
//     console.log('True');
// } else {console.log('False');}

// //8
// var a = -3;
// if (a == 0 || a == 2) {
//     a += 7;
//     console.log(a);
// } else {
//     a /= 10;
//     console.log(a);
// }

// //9
// var b = 2;
// var c = 5;
// if (b <= 1 && c >=3) {
//     var resul = b + c;
//     console.log(resul);
// } else {
//     resul = b - c;
//     console.log(resul);
// }

// //9
// var a = 3;
// var b = 5;
// if((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//     console.log('True');
// } else{console.log('False');}

// //10
// var num = '1';
// var result = '';
// switch(num){
//     case '1':
//         result = 'Zima';
//         break;
//     case '2':
//         result = 'Vesna';
//         break;  
//     case '3':
//         result = 'Leto';
//         break; 
//     case '4':
//         result = 'Oseny';
//         break;  
//     default:
//         console.log('Takogo znacheniya net');
//         break;         
// }
// console.log(result);

// //11
// var day = 21;
// if (day >= 1 && day <= 10) {
//     console.log('Pervaya dekada');
// }
//  if (day >= 11 && day <=20) {
//     console.log('Vtoraya dekada');
// }
// if (day >= 21 && day <= 31) {
//     console.log('Tretya dekada');
// }
// if (day == 0 || day >= 32) {
//     console.log('Takogo dnya net');
// }

// //12
// var month = 8;
// if (month == 12 || month >=1 && month <= 2) {
//     console.log('Zima');
// }
// if (month >= 3 && month <= 5) {
//     console.log('Vesna');
// }
// if (month >= 6 && month <= 8) {
//     console.log('Leto');
// }
// if (month >= 9 && month <= 11) {
//     console.log('Oseny');
// }

// //13
// var stroka = 'abcde';
// if (stroka[0] == 'a') {
//     console.log('True');
// } else (console.log('False'));

// //14
// var num = '12345';
// if (num[0] == 1 || num[0] == 2 || num[0] == 3) {
//     console.log(true);
// } else {console.log(false);}

// //15
// var nums = '123';
// var result = +(nums[0]) + Number(nums[1]) + Number(nums[2]);
// console.log(result);

//16
var num = '123456';
var first = +(num[0]) + Number(num[1]) + Number(num[2]);
var second = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (first == second) {
    console.log(true);
} else {console.log(false);}