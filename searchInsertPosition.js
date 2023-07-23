let num = [1, 3, 5, 6];
let targ = 5;

let result = searchInsert(num, targ);

function searchInsert(nums, target) {
    let x = Infinity;
    let y;
    let z;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] - target <= x && nums[i] - target >= 0){
            x = nums[i] - target;
            y = i;
        }  
    }

    for(let j = 0; j < nums.length; j++){
        if(nums[j] - target < 0){
            z = 1;
        }
        else{
            z = 0;
            break;
        }
    }

    if(z == 1){
        y = nums.length;
    }

    return y;
};

console.log(result);