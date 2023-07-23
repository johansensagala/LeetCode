// let divd = -2147483648;
// let divs = 2;

// let result = divide(divd, divs);

// function divide(dividend, divisor) {
//     let temp = divisor;
//     let num = 0;

//     // if((dividend <= -2147483648 && divisor == 1) || (dividend <= -2147483648 && divisor == -1)){
//     //     if(divisor < 0){
//     //         num = 2147483647;
//     //     }
//     //     else{
//     //         num = -2147483648;
//     //     }
//     // }
//     // else if(dividend > 2147483647){
//     //     if(divisor < 0){
//     //         num = -2147483648;
//     //     }
//     //     else{
//     //         num = 2147483647;
//     //     }
//     // }
//     if((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)){
//         while(Math.abs(temp) <= Math.abs(dividend)){
//             num++;
//             temp = Math.abs(temp) + Math.abs(divisor);
//         }
//         num = 0 - num;
//     }
//     else{
//         while(Math.abs(temp) <= Math.abs(dividend)){
//             num++;
//             temp = Math.abs(temp) + Math.abs(divisor);
//         }
//     }

//     if(num > 2147483647){
//         num = 2147483647;
//     }
//     else if(num < -2147483648){
//         num = -2147483648;
//     }

//     return num;
// }

// console.log(result);

let divd = -2147483648;
let divs = 2;

let result = divide(divd, divs);

function divide(dividend, divisor) {
    if (dividend === -Math.pow(2, 31) && divisor === -1) {
        return Math.pow(2, 31) - 1; // overflow case
    }

    let sign = 1;
    if (dividend >= 0 && divisor > 0 || dividend < 0 && divisor < 0) {
        sign = 1;
    } else {
        sign = -1;
    }

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let quotient = 0;
    while (dividend >= divisor) {
        let tempDivisor = divisor;
        let powerOfTwo = 1;
        while (dividend >= (tempDivisor << 1)) {
            tempDivisor <<= 1;
            powerOfTwo <<= 1;
        }
        dividend -= tempDivisor;
        quotient += powerOfTwo;
    }

    return sign * quotient;
}

console.log(result);