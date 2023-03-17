let cl = console.log;

// enums

enum Role {
    Admin = "A",               //= 100      // 0  By-default    // if value is string type then every enum assign value compulsary
    candidate = "C",           //= 101      // 1
    Super_Admin  = "SA",       //= 102      // 2  
}

let person = {
    fname: "jhon",
    lname: "doe",
    age: 23,
    userRole: "ABC"                         // string hai to string me dege / no. hai to no. me denge
} 

cl(Role.candidate);  // 1
cl(Role.Admin);      // 0
cl(Role.Super_Admin) // 2

if(person.userRole === Role.Super_Admin){
    cl(`userRole is super Admin`)
}

if(person.userRole === Role.candidate){
    // funct .....show both components candidate and company
    cl(`show both components candidate and company`)
}

/////////////////////////////////////////////////////////////////////////////

// ordered,ready, for dispatched, shiped, delivered

enum ProductStates {
    ordered = "Ordered",
    ReadyToDispatch = "RTD",
    shiped = "shiped"
}

