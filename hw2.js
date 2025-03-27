// функция digitCount (n), кторая принимает число n и возвращет количество цифр в нем. 
function digitCount (n) {
    let count = 0; // объявляем переменную count, которая будет считать количество цифр
    for (; n > 0; n = n /10 | 0 ) {  // используем цикл for без инициализации ;
        count++; // count = count + 1
    }
    return count || 1; // если число 0, возвращаем 1
}

console.log(digitCount(12345)); //5
console.log(digitCount(7)); //1
console.log(digitCount(987654321)); //9

//функцию reverseNumber(n), которая принимает число n 
// и возвращает его цифры в обратном порядке согласно правилам математики
function reverseNumber(n) {
    let str = String(n); // преобразуем число в строку
    let reversedStr = ""; // создаем пустую строку для хранения результата
    for (let i = str.length - 1; i >= 0; i --) {  //цикл для написания символов с конца
        reversedStr += str[i]; // добавляем символ в новую строку
    }
    return Number(reversedStr); // преобразуем строку обратно в число и возвращаем
   }

console.log(reverseNumber(12340)); // 4321
console.log(reverseNumber(987.6)); // 6.789
console.log(reverseNumber(1000)); // 1

// функцию factorial(n), которая принимает число n и возвращает его факториал (n!).

function factorial(n) {
   let result = 1; // начинаем с 1, т.к. умножение на 0 не имеет смысла
   for (let i = 1; i <= n; i++){ // цикл проходит по всем числам от 1 до n
    result *= i; // умножаем текущее значение result на i
   }
   return result;
}

console.log(factorial(5)); // 120 
console.log(factorial(7)); // 5040