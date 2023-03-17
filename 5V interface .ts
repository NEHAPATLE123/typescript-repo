let cl = console.log;

// type , interface and class

// ---- type ----//

type Person1 = {
    fname: string;
    lname: string;
    age: number;
    skills: string[];
    gender? : string;   // optional = ?
}

let person1 : Person1 = {
    fname: "jhon",
    lname: "doe",
    age: 23,
    skills: ["angular", "html", "js", "ts"]
}

////////////////////////////////////////////////////////////////////

// --- interface --- // EX : 1

interface Iperson2 {
    fname: string;
    lname: string;
    age: number;
    skills: string[];
 // skills: Array<string>;
    gender ? : string;
}

let person2 : Iperson2 = {
    fname: "jhon",
    lname: "doe",
    age: 23,
    skills: ["angular", "html", "js", "ts"]
}

/////////////////////////////////////////
// EX : 2

interface Iperson3 {
    fname: string;
    lname: string;
    age: number;
    skills: string[];
 // skills: Array<string>;
    gender ? : string;
}

// person6 and person7 are 2 object

let person6 : Iperson3 = {
    fname: "jhon",
    lname: "doe",
    age: 23,
    skills: ["angular", "html", "js", "ts"]
}

let person7 : Iperson3 = {
    fname: "jhon",
    lname: "doe",
    age: 23,
    skills: ["angular", "html", "js", "ts"]
}

let allPersons : Iperson3[] = [person6, person7]

// let skills: (string|number)[] = ["angular", "html", "js", "ts", 123]            // EXAMPLE
// let skil : number[] = [23,324,4,4] 

////////////////////////////////////////////////////////////////////////
// EX : 3

// type Product = {
//     pName: string;
//     pModal: string;
//     price: number;
//     rating: number
// }

interface Iproduct {
    pName: string;
    pModal: string;
    price: number;
    rating: number;
}

let samsung : Iproduct = {
    pName: "samsung",
    pModal: "g4",
    price: 23435,
    rating : 4
}

let iphone : Iproduct = {
    pName: "samsung",
    pModal: "il4",
    price: 5,
    rating : 5
}

let allProduct : Iproduct[] = [samsung, iphone];

//////////////////////////////////////////////////////////////////////

type Passenger = {
    fname: string;
    lname: string;
    isCheckedIn: boolean;
    isCheckedOut: boolean;
    childs: (number | null)
}

interface Ipassenger{
    fname: string;
    lname: string;
    isCheckedIn: boolean;
    isCheckedOut: boolean;
    childs: (number | null)
}

//--//

let passenger1: Ipassenger = {
    fname: "jhon",
    lname: "doe",
    isCheckedIn: true,
    isCheckedOut: false,
    childs: 2
}

let passenger2: Ipassenger = {
    fname: "nita",
    lname: "doe",
    isCheckedIn: true,
    isCheckedOut: false,
    childs: null
}

let allPassenger: Ipassenger[] = [passenger1,passenger2]

////////////////////////////////////////////////////////////////////////






