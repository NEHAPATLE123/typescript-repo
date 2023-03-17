let cl = console.log;

// (enums)
// tupels >> Fixed length array

type Person = {
    fname: string;
    lname: string;
    age: number;
    userrole: [number,string, boolean];                        // [only array me dalna hai/sequencefully]
} 

let person: Person = {
    fname: "jhon",
    lname: "doe",
    age: 13,
    userrole: [2, "Admin", true]                                  // putting value in proper order
}

// person.userrole[0] = "admin"
// person.userrole[2] = 23
// person.userrole.push("hello")               // pop,push,shift,unshift method uses in tupels but we have not use in this method
// cl(person);