let cl = console.log;

type MathOp = (n1:number, n2:number) => number

// function type

function add(n1:number, n2:number) : number {
    return n1 + n2
}

function multi(n1:number, n2:number) : number {
    return n1 * n2
}

function printResult(num:number) : void {
    cl(`The result is ${num}`)
}

// let test : Function;                                   // any function or pass
// let test : (n1:number, n2:number) => number ;          // this is arrow like structure but not a arrow function
   let test : MathOp ;                                    // it is function type

test = add; 
test = multi ;

// test = 10; 
// test = printResult;

cl(test(20,30));

