let cl = console.log;

// string, number,boolean

const num1 = document.getElementById("num1")as HTMLInputElement
const num2 = document.getElementById("num2")as HTMLInputElement
const addBtn = document.getElementById("add")!  

// assertion / implicity  
// let x = 10;
//     x = 20;
// let y = "123"
//     y = "hello"

// TypeCasting >> (as HTMLElement) or (!) or (<HTMLElement>) 
    
const additon = (n1:number, n2:number) => {
    cl( n1 + n2 )
}
//nullcheker
addBtn.addEventListener("click", () => {
    additon(+num1.value, +num2.value)
})

additon(12,12)






/////////////////////////////////////////////////////////////////////

let data :{fname: string, lname: string, email: null | string}[] = [
    {
        fname: "ravi",
        lname: "niturkar",
        email: null
    },
    {
        fname: "neha",
        lname: "patle",
        email: "neha@123"
    }
]

for (const i of data) {
    cl(i.email?.toUpperCase())
}