// написать функцию которая принимает массив чисел и возвращает их сумму
function sumArray(arr) {
    let sum = 0;
   for (let num of arr) {
        sum += num;
   }
   return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));


// второй вариант решения с использованием метода reduce - обходит массив и накапливает результат
   let numbers = [1, 2, 3, 4, 5];
   let sum = numbers.reduce((aсс, num) => aсс + num, 0); //aсс - это строка которая накапливает данные
console.log(sum);


//принимает массив и элемент который нужно проверить на наличие в этом массиве
//  и возвращает true или false

function containsElement(arr, element){ 
    for (let item of arr) {
        if (item === element) {
            return true;
        }
    }
    return false;
}
console.log(containsElement([1, 2, 3, 4, 5], 1));
console.log(containsElement([1, 2, 3, 4, 5], 6));

const fruits = ["яблоко", "банан", "апельсин"];
console.log(fruits.includes("банан")); //метод includes - возвращает true/false
console.log(fruits.includes("мандарин"));