let cl = console.log;

// unknown

let userDetail : unknown ;
let userName : string ;


userDetail = 123;
userDetail = "jhon";
// userDetail= true;

// userName = userDetail ; // unknown show error / any not show error
// cl(userName)

if(typeof userDetail === "string"){
    userName = userDetail;
    cl(userName);
}



