const fibonacci = function(n) {
    if(!parseInt(n)) return "OOPS";
    if(parseInt(n)<=0) return "OOPS";

    n = parseInt(n);
    let counter1=1;
    let counter2=1;
    if(n==1||n==2){
        return 1;
    }
    for(let i=2;i<n;i++){
        let oldCounter1 = counter1;
        counter1 = counter2;
        counter2 = oldCounter1 + counter2;
    }
    return counter2;
}

module.export(fibonacci)