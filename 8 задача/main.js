var s = "";
for (let i = 0; i <= 10; i++){
    if (i % 2 == 1){
        for (let j = 0; j < i; j++){
            s += '*';
        }
        console.log(s);
        s = "";
    }
    else{
        for (let j = 0; j < i; j++){
            s += '#';
        }
    console.log(s);
    s = "";
    }
}
