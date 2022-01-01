const addition =  (num1, num2 = 0) =>{ //default value can be sent in function declaration
/*
    // num2 value reassigned to num2(from argument) or 0
    // num2 = num2 || 0;
*/
    return num1 + num2;
}
// const total = addition(12, 32);
const total = addition(31);
console.log(total);