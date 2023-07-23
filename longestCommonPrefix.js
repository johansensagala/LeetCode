let list = ["flower","flower","flower","flower"];
let result = longestCommonPrefix(list);

function longestCommonPrefix(strs){
    let prefix = "";
    let letter;
    let truth = true

    for(let a = 0; a < strs.length; a++){
        if (strs[a].length == 0){
            truth = false;
            break;
        }
    }
    if(truth == true){
        mainLoop:
        for(let i = 0; i < strs[0].length; i++){
            for(let j = 0; j < strs.length; j++){
                if(j == 0){
                    letter = strs[j][i];
                }
                else if(strs[j][i] != letter){
                    break mainLoop;
                }
            }
            prefix += letter;
        }
    }

    return prefix;
};

console.log(result);