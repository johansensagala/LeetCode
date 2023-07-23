const myMap = new Map();
myMap.set("I", 1);
myMap.set("V", 5);
myMap.set("X", 10);
myMap.set("L", 50);
myMap.set("C", 100);
myMap.set("D", 500);
myMap.set("M", 1000);

let roman = prompt("Masukkan bilangan romawi");
let x;

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

for(n=0; n<roman.length; n++){
    if(!myMap.has(roman[n])){
        x = "Terdapat karakter yang bukan bilangan romawi";
        break;
    }
    else if(roman[n] === "I"){
        if(roman[n] === roman[n+1]){
            if(roman[n] === roman[n+2] && roman[n] === roman[n+3]){
                x = "Angka romawi tidak valid";
                break;
            }
            else if(myMap.get(roman[n]) < myMap.get(roman[n+2])){
                x = "Angka romawi tidak valid";
                break;
            }
            // else if(myMap.get(roman[n]) >= myMap.get(roman[n-1])){
            //     x = "Angka romawi tidak valid";
            //     break;
            // }
            else{
                x = "Bilangan integer dari " + roman + " adalah: " + romanToInt(roman);
            }                    
        }
        else if(roman[n+1] === "L" || roman[n+1] === "C" || roman[n+1] === "D" || roman[n+1] === "M"){
            x = "Angka romawi tidak valid";
            break;
        }
        else{
            x = "Bilangan integer dari " + roman + " adalah: " + romanToInt(roman);
        }
    }
    else if(roman[n] === "V"){
        if(roman[n] === roman[n+1]){
            x = "Angka romawi tidak valid";
            break;
        }
        else if(roman[n+1] === "X" || roman[n+1] === "L" || roman[n+1] === "C" || roman[n+1] === "D" || roman[n+1] === "M"){
            x = "Angka romawi tidak valid";
            break;
        }
        else{
            x = "Bilangan integer dari " + roman + " adalah: " + romanToInt(roman);
        }
    }
    else if(roman[n] === "X"){
        if(roman[n] === roman[n+1]){
            if(roman[n] === roman[n+2] && roman[n] === roman[n+3]){
                x = "Angka romawi tidak valid";
                break;
            }
            else if(myMap.get(roman[n]) < myMap.get(roman[n+2])){
                x = "Angka romawi tidak valid";
                break;
            }
            // else if(myMap.get(roman[n]) >= myMap.get(roman[n-1])){
            //     x = "Angka romawi tidak valid";
            //     break;
            // }
            else{
                x = "Bilangan integer dari " + roman + " adalah: " + romanToInt(roman);
            }                    
        }
        else if(roman[n+1] === "D" || roman[n+1] === "M"){
            x = "Angka romawi tidak valid";
            break;
        }
        else{
            x = "Bilangan integer dari " + roman + " adalah: " + romanToInt(roman);
        }
    }
    else if(roman[n] === "L"){
        if(roman[n] === roman[n+1]){
            x = "Angka romawi tidak valid";
            break;
        }
        else if(roman[n+1] === "C" || roman[n+1] === "D" || roman[n+1] === "M"){
            x = "Angka romawi tidak valid";
            break;
        }
        else{
            x = "Bilangan integer dari " + roman + " adalah: " + romanToInt(roman);
        }
    }
    else if(roman[n] === "C"){
        if(roman[n] === roman[n+1]){
            if(roman[n] === roman[n+2] && roman[n] === roman[n+3]){
                x = "Angka romawi tidak valid";
                break;
            }
            else if(myMap.get(roman[n]) < myMap.get(roman[n+2])){
                x = "Angka romawi tidak valid";
                break;
            }
            // else if(myMap.get(roman[n]) >= myMap.get(roman[n-1])){
            //     x = "Angka romawi tidak valid";
            //     break;
            // }
            else{
                x = "Bilangan integer dari " + roman + " adalah: " + romanToInt(roman);
            }                    
        }
        else{
            x = "Bilangan integer dari " + roman + " adalah: " + romanToInt(roman);
        }
    }
    else if(roman[n] === "D"){
        if(roman[n] === roman[n+1]){
            x = "Angka romawi tidak valid";
            break;
        }
        else if(roman[n+1] === "M"){
            x = "Angka romawi tidak valid";
            break;
        }
        else{
            x = "Bilangan integer dari " + roman + " adalah: " + romanToInt(roman);
        }
    }
    else if(roman[n] === "M"){
        if(roman[n] === roman[n+1]){
            if(roman[n] === roman[n+2] && roman[n] === roman[n+3]){
                x = "Angka romawi tidak valid";
                break;
            }
            else if(myMap.get(roman[n]) < myMap.get(roman[n+2])){
                x = "Angka romawi tidak valid";
                break;
            }
            // else if(myMap.get(roman[n]) >= myMap.get(roman[n-1])){
            //     x = "Angka romawi tidak valid";
            //     break;
            // }
            else{
                x = "Bilangan integer dari " + roman + " adalah: " + romanToInt(roman);
            }                    
        }
        else{
            x = "Bilangan integer dari " + roman + " adalah: " + romanToInt(roman);
        }
    }
}

alert(x);