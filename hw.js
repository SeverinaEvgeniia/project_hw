// getSing, которая принимает число и возвращает
function getSign(num) { 
  
if (num > 0) {
    return "positive";
} else if (num < 0) {
    return "negative"; }
    else {
    return "zero"
}  
} 
console.log(getSign(10)); // "positive"
console.log(getSign(-5)); // "negative"
console.log(getSign(0)); // "zero"

// max (a, b), которая возвращает большее из двух чисел
function max(a, b) {
if (a > b) {
   return a; }
   else {
    return b;
   } 
   }

console.log(max(10, 20)); // 20
console.log(max(5, 3));   // 5
console.log(max(7, 7));   // 7

// checkAge(age), которая проверяет возраст
function checkAge(age) {
    if (age < 18) {
        return "Access denied";
    } else if (age <= 65) {
        return "Access granted";
    } else {
        return "Are you sure?";
    }
}

console.log(checkAge(16)); // "Access denied"
console.log(checkAge(25)); //  "Access granted"
console.log(checkAge(70)); // "Are you sure?"