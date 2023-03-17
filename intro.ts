let cl = console.log;

const num1 = document.getElementById("num1") as HTMLInputElement;  //typecasting
const num2 = document.getElementById("num2") as HTMLInputElement;
const add = document.getElementById("add") as HTMLElement;
       // <HTMLElement>

const addition = (n1:number, n2:number) => {
    cl(n1 + n2)
}

add.addEventListener("click", () => {
   return  addition(+num1.value, +num2.value)
})

// cl(addition(12,12))