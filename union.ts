let cl = console.log;

// union type or custom type

type Combinable = number | string ;

function combine(n1:Combinable, n2:Combinable){
    let result : any ;
    if( typeof n1 === "number" && typeof n2 === "number"){
        result = n1 + n2 ;
    }else{
        result = n1.toString() + n2.toString()
    }
    return result;
}

cl(combine(100,200)); // 200
cl(combine("100","200")); // 100200

// n1 > number & n2 > number 
// n1 > number & n2 > string 
// n1 > string & n2 > number 
// n1 > string & n2 > string 

//////////////////////////////////////////////////////////////////////////////////

let x = 10;  // datatype number >> we have reassign it

//----- literal type -------//
// means value and type will be same >> we use const keyword then create literal type 

const y = 5; // type of y is number 5 and its value is also number 5 >> we have not reassign and not redeclare only 5 value is always

let z: 20 = 20;  // create literal type >> lifetime z value is 20
let impSkills: "javascript" = "javascript";














