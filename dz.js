// //1
// let a = prompt("Введите первое число:");
// let b = prompt("Введите второе число:");
// while (a != b) {
//     if (a > b) {
//         a = a - b;
//     } else {
//         b = b - a;
//     }
// }
// alert("Наибольший общий делитель: " + a);
//2
let num = prompt("Введите число:");
alert("Количество цифр в числе: " + num.length);
// //3
// let positive = 0, negative = 0, zeros = 0, even = 0, odd = 0;
// for (let i = 0; i < 10; i++) {
//     let num = prompt("Введите число:");
//     if (num > 0) {
//         positive++;
//     } else if (num < 0) {
//         negative++;
//     } else {
//         zeros++;
//     }
//     if (num % 2 == 0) {
//         even++;
//     } else {
//         odd++;
//     }
// }
// alert("Положительных: " + positive + "\nОтрицательных: " + negative + "\nНулей: " + zeros + "\nЧетных: " + even + "\nНечетных: " + odd);
// //4
// while (true) {
//     let num1 = prompt("Введите первое число:");
//     let num2 = prompt("Введите второе число:");
//     let operator = prompt("Введите оператор:");
//     let result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//     }
//     alert("Результат: " + result);
//     let repeat = confirm("Хотите решить еще один пример?");
//     if (!repeat) {
//         break;
//     }
// }
// //5
// let num = prompt("Введите число:");
// let shift = prompt("На сколько цифр его сдвинуть:");
// let arr = num.split('');
// for(let i = 0; i < shift; i++) {
//     arr.push(arr.shift());
// }
// alert("Результат: " + arr.join(''));

// //6
// let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// let i = 0;
// while (true) {
//     alert("День недели: " + days[i]);
//     i = (i + 1) % 7;
//     let next = confirm("Хотите увидеть следующий день?");
//     if (!next) {
//         break;
//     }
// }
// //7
// let min = 0, max = 100;
// while (true) {
//     let N = Math.floor((min + max) / 2);
//     let answer = prompt("Ваше число > " + N + ", < " + N + " или == " + N + "?");
//     if (answer == '>') {
//         min = N + 1;
//     } else if (answer == '<') {
//         max = N - 1;
//     } else if (answer == '==') {
//         alert("Ура, я угадал ваше число " + N + "!");
//         break;
//     }
// }
// //
