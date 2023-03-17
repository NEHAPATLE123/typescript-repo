let cl = console.log;

function add(n1:number, n2:number) : number {
    return n1 + n2 ;
}

function add1(n1:number, n2:number) : string {
    return n1 + n2 + "" ;
}

////////////////////////////////////////////////////

type User = { id:number, userId:number, title:string, body:string}

function getPost(): User {
    return {id:1, userId:2, title:"string", body:"string"}
}

function getPostAll(): User {                                           // User[]
    return {id:1, userId:2, title:"string", body:"string"}
}

/////////////////////////////////////////////////////

function printName() : void {
    cl ("hello js")
}
printName()

function printName1(): undefined {
        cl("hello ts")
        return            //undefined 
}

///////////////////////////////////////////////////////