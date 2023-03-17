let cl = console.log;

function additon(n1:number, n2:number, showresult:boolean, phrase: string){
    let result = n1+n2                        // showresult ? cl(phrase+result) : return(phrase+result)
    if(showresult){                               
        cl(phrase + result)                   // cl(`${phrase} ${n1+n2}`)
    }else{
        return phrase + result                // return(`${phrase} ${n1+n2}`)
    }
}

(additon(1,2,true, "The result is "));
cl(additon(20,20,false, "The result is "));

///////////////////////////////////////////////////////////////

//-------------- type alias ------------------//

type Person = {
    fname: string, 
    lname: string, 
    age: number,
    child: {
        fname: string,
        lname: string,
        age: number
    }
}

let person: Person = {
    fname: "jhon",
    lname: "doe",
    age: 23,
    child: {
        fname: "may",
        lname: "doe",
        age: 5
    }
}

//////////////////////////////////////////////////////////////////