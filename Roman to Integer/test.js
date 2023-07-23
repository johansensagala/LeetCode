let num = [1, 2, 3];
let result = nextPermutation(num);

function nextPermutation (arr) {

    let len = arr.length;
    
    for (let i = len - 1; i >= 1; i--) {
        for (let j = i - 1; j >=0 ; j--) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                let leftArr = arr.slice(0, i + 1);
                let rightArr = arr.slice(i + 1, length - 1);

                rightArr = rightArr.sort((a, b) => a - b);

                let newArr = leftArr.append(rightArr);
            }
        }
    }

    return newArr;
}

console.log(result);