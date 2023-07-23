let string = "";
let result = lengthOfLongestSubstring(string)

function lengthOfLongestSubstring(s){
    let m = 1;
    let n = 0;
    let o = 0;

    if(s.length != 0){
        for(let i = 0; i < s.length; i++){
            main:
            for(let j = i+1; j < s.length; j++){
                for(let k = j-1; k >= i; k--){
                    if(s[j] != s[k]){
                        m++;
                    }
                    else{
                        break main;
                    }
                }
                if(m > n){
                    n = m;
                }
                m = 1;
            }
            if(n > o){
                o = n;        
            }
            m = 1;

            if(o == 0){
                o = 1;
            }
            m = 1;
        }
    }

    return o;
};

console.log(result);

// let s = "abcabcbb";

//     let m = 1;
//     let n = 0;
//     let o = 0;

//     for(let i = 0; i < s.length; i++){
//         main:
//         for(let j = i+1; j < s.length; j++){
//             for(let k = j-1; k >= i; k--){
//                 if(s[j] != s[k]){
//                     m++;
//                 }
//                 else{
//                     break main;
//                 }
//             }
//             if(m > n){
//                 n = m;
//             }
//             m = 1;
//         }
//         if(n > o){
//             o = n;        
//         }
//         m = 1;
//     }

//     if(o == 0){
//         o = 1;
//     }

// console.log(o);