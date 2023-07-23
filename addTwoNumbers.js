let nums1 = [1, 2];
let nums2 = [3, 4];
let median = findMedianSortedArrays(nums1, nums2);

function findMedianSortedArrays(number1, number2) {
    let c = number1.concat(number2);

    let d = c.sort(function(x, y){
        return x - y;
    });

    if(d.length % 2 == 0){
        number = (d[d.length / 2 - 1] + d[d.length / 2]) / 2;
    }
    else if(d.length % 2 == 1){
        number = d[Math.floor(d.length / 2)];
    }

    return number;
};

console.log(median);