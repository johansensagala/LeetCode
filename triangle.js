let triangle = [[-1],[3,2],[1,-2,-1]];

let result = minimumTotal(triangle);

function minimumTotal(array){
    let total = 0;
    let value = Infinity;
    let strg;

    for(let i = array.length - 1; i >= 0; i--){
        if(i === array.length - 1){
            for(var j = 0; j < array[i].length; j++){
                if(array[i][j] < value){
                    value = array[i][j];
                    strg = j;
                }
            }
            total += value;
        }
        else{
            if(strg == 0){
                total += array[i][strg];
            }
            else if(strg == array[i].length){
                total += array[i][strg-1];
                strg--;
            }
            else{
                if(array[i][strg-1] < array[i][strg]){
                    total += array[i][strg-1];
                    strg = strg-1;
                }
                else{
                    total += array[i][strg];
                    strg = strg;
                }
            }
            
        }

    }

    return total;
}

console.log(result);