let input = 1534236469;
let ret = reverse(input);

function reverse(number) {
    let result = 0;
    let rest;
    let number2 = number;
  
    while (number != 0) {
        if(number > 0){
            rest = number % 10; // 1 2 1
            number = Math.floor(number / 10); // 12 1 0
            result = result * 10 + rest; // 1 12 121
        }
        else{
            rest = number % 10; // -3
            number = Math.ceil(number / 10); // -12
            result = result * 10 + rest; // 
        }
    }
  
    if(result < -(2**31) || result > (2**31 - 1)){
        result = 0;
    }

    return result;
}

console.log(ret);