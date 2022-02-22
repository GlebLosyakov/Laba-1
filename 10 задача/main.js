let a = 33, b = 4, c = -1, d = 11, e = -12;
if (a > b) {
    if (a > c){
        if (a > d){
            if (a > e){
                console.log(a);
            }
        }
        else{
            if (d > e){
                console.log(d);
            }
            else{
                console.log(e);
            }
        }
    }
    else{
        if (c > d){
            if (c > e){
                console.log(c);
            }
        }
        else{
            if (d > e){
                console.log(d);
            }
            else{
                console.log(e);
            }
        }
    }
}
else{
    if (b > c){
        if (b > d){
            if (b > e){
                console.log(b);
            }
            else{
                console.lof(e);
            }
        }
        else{
            if (d > e){
                console.log(d);
            }
            else{
                console.log(e);
            }
        }
    }
    else{
        if (c > d){
            if (c > e){
                console.log(c);
            }
            else{
                console.log(e);
            }
        }
        else{
            if (d > e){
                console.log(d);
            }
            else{
                console.log(e);
            }
        }
    }
}