let nums = [3, 2, 4];
let target = 6;
let result = [];

let twoSum = function(num, targ){
    loop1:
    for(i = 0; i < num.length; i++){
        for(j = i+1; j < num.length; j++){
            if(num[i] + num[j] == targ){
                result.push(i);
                result.push(j);
                break loop1;
            }
        }
    }
}

twoSum(nums, target);

console.log(result);