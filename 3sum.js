// let number = [-1, 0, 1, 2, -1, -4];

// let result = threeSum(number);

// function threeSum(nums) {
//     let triplets = [];
//     let temp = [];
//     let truth = true;

//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             for(let k = j+1; k < nums.length; k++){
//                 if(nums[i] + nums[j] + nums[k] === 0){
//                     temp.push(nums[i]);
//                     temp.push(nums[j]);
//                     temp.push(nums[k]);
//                     temp = temp.sort(function(x, y){
//                         return x - y;
//                     });
//                     for(let l = 0; l < triplets.length; l++){
//                         if(JSON.stringify(triplets[l]) === JSON.stringify(temp)){
//                             truth = false;
//                             break;
//                         }
//                     }
//                     if(truth === true){
//                         triplets.push(temp);
//                     }
//                     temp = [];
//                     truth = true;
//                 }
//             }
//         }
//     }

//     return triplets;
// };

// console.log(result);

let number = [-1, 0, 1, 2, -1, -4];
let result = threeSum(number);
console.log(result);

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const triplets = [];
    const length = nums.length;

    for (let i = 0; i < length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                triplets.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }

    return triplets;
}