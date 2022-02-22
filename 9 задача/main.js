let a = 3, b = 4, c = -1;
if (a > c) {
    if (a > b){
        if (b > c){
            console.log(c, b, a);
        }
        else{
            console.log(b, c, a);
        }
    }
    else{
        console.log(c, a, b);
    }
}
else{
    if (a > b){
        console.log(b, a, c);
    }
    else{
        if (b > c){
            console.log(a, c, b);
        }
        else{
            console.log(a, b, c);
        }
    }
}