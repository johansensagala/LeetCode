const myMap = new Map();
myMap.set("I", 1);
myMap.set("V", 5);
myMap.set("X", 10);
myMap.set("L", 50);
myMap.set("C", 100);
myMap.set("D", 500);
myMap.set("M", 1000);

let roman = 'XXIX';

let result = romanToInt(roman);

function romanToInt(a) {
    let b = 0;
    let i = a.length - 1;

    while(i>=0){
        if(myMap.get(a[i]) > myMap.get(a[i-1])) {
            b += (myMap.get(a[i]) - myMap.get(a[i-1]));
            i=i-2; 
        }
        else{
            b += (myMap.get(a[i]));
            i--;
        }
    }

    return b;
}

console.log(result);