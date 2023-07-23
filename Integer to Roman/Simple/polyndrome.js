// let input = 1234567890;
// let reverseInt = reverse(input);
// let truth = Boolean(input==reverseInt);

// function reverse(number){
//     let result = 0;
//     let rest;
//     let exp = 0;

//     while(number >= 1){
//         exp++; // 
//         number = number/10; // 
//     }

//     number = number * 10**exp; // 1838

//     while(number > 0){
//         rest = number%10; // 8 3 8 1
//         number = number/10 - rest/10; // 183 18 1 0
//         exp--; // 3 2 1 0
//         result += rest*10**exp; // 8000 + 300 + 80 + 1
//     }

//     return Math.round(result);
// }

// console.log(reverseInt);

let input = 1;
let truth = isPalindrome(input);

function isPalindrome(number) {
    let result = 0;
    let rest;
    let number2 = number;
  
    while (number > 0) {
      rest = Math.floor(number % 10); // 1 2 1
      number = Math.floor(number / 10); // 12 1 0
      result = result * 10 + rest; // 1 12 121
    }

    reverse = number2 == result;
  
    return reverse;
}

console.log(truth);