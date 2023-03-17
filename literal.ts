let cl = console.log;

// union type or custom type

type Combinable = number | string ;

function combine(n1:Combinable, n2:Combinable, resultConversion: "as-string" | "as-number" ){
    let result : any ;
    if( typeof n1 === "number" && typeof n2 === "number"){
        result = n1 + n2 ;
    }else{
        result = n1.toString() + n2.toString() 
    }
    if(resultConversion === "as-string"){                       // FUNCTION KA DATATYPE CHANGE KRNA
        return result.toString()
    }
    if(resultConversion === "as-number"){
        return +result ;
    }
}

cl(combine(100,200, "as-string"))                 // 300 >>> number
cl(combine("100", "200", "as-number"))            // 100200 string >>> number


// n1:number + n2:number >>>>  result: number
// n1:string + n2:number >>>>  result: string
// n1:number + n2:string >>>>  result: string
// n1:string + n2:string >>>>  result: string
