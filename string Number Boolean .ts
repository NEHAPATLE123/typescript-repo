// working with numbers, boolean, and strings

let cl = console.log;

function add(n1:number ,n2:number, showresult:boolean, phrase:string){
    let result = n1+n2
    // showresult ? cl(phrase + result): phrase + result;                           
    if(showresult){
        cl(phrase + result)              // cl(`${phrase} ${n1+n2}`)
    }else{
        return phrase + result          // return(`${phrase} ${n1+n2}`)
    }
}

let num1 = 10;
let num2 = 20;

(add(num1, num2, true, " my name is neha "));
cl(add(num1, num2, false, " my name is yash "));

