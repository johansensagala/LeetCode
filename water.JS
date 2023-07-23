// SOLUTION 1

// let array = [1,8,6,2,5,4,8,3,7];
// let result = maxArea(array)

// function maxArea(height){
//     let max = 0;
//     for(i=0; i<height.length; i++){
//         for(j=i+1; j<height.length; j++){
//             if((Math.min(height[i], height[j]) * (j-i)) > max){
//                 max = (Math.min(height[i], height[j]) * (j-i));
//             }
//         }
//     }
//     return max;
// }

// console.log(result);

//===============================================================================================================================

//SOLUTION 2

// let array = [1,1];
// let result = maxArea(array)

// function maxArea(height){
//     let max = 0;
//     let i = 0;
//     let j = i + 1;
    
//     while(j < height.length && i < height.length){
//         if(j+1 == height.length){
//             if((Math.min(height[i], height[j]) * (j-i)) > max){
//                 max = (Math.min(height[i], height[j]) * (j-i));
//             }
//             i++;
//             j = i + 1;
//         }
//         else{
//             if((Math.min(height[i], height[j]) * (j-i)) > max){
//                 max = (Math.min(height[i], height[j]) * (j-i));
//             }
//             j++;
//         }
//     }

//     return max;
// }

// console.log(result);

//===============================================================================================================================

//SOLUTION 3

let array = [1,8,6,2,5,4,8,3,7];
let result = maxArea(array)

function maxArea(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
}

console.log(result);