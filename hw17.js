let sqr = a => a*a;

let incld = (a,b)=> a.includes(b);

let greater = (a,b) => {
    if (a>b) {
        return a;
    } else{
        return b;
    }
}


let sum = (a)=> a.reduce((accumulator,currentvalue) => accumulator+currentvalue,0);


let tf = (a,val,ourValue) => {
    return a[val]===ourValue;
}

