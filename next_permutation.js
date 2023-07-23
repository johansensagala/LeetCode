let num = [1, 3, 2];
let result = nextPermutation(num);

function nextPermutation (arr) {

    let len = arr.length;
    let newArr;
    let leftArr;
    let rightArr;
    let isBiggest = true;
    
    main:
    for (let i = len - 1; i >= 1; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;

                leftArr = arr.slice(0, j + 1);
                rightArr = arr.slice(j + 1, len);

                rightArr = rightArr.sort((a, b) => a - b);

                newArr = [...leftArr, ...rightArr];
                
                isBiggest = false;

                break main;
            }
        }
    }

    if (isBiggest == true) {
        newArr = arr.sort((a, b) => a - b);
    }

    return newArr;
}

console.log(result);