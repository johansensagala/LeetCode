let number = [5, 7, 7, 8, 8, 10];
let target = 8;

let result = searchRange(number, target);

function searchRange(nums, targ){
    let position = [];
    let temp = [-1, -1];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === targ){
            while(temp[0] === -1){
                temp.shift();
            }
            temp.push(i);
        }
    }

    position.push(temp[0]);
    position.push(temp[temp.length - 1]);

    while(temp.length != 0){
        temp.pop();
    }

    return position;
}

console.log(result);