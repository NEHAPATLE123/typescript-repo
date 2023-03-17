let cl = console.log;

// object and array

type Person = {
    fname: string,
    lname: string,
    age: number,
    skills: string[]
}

let person: Person = {
    fname: "jhon",
    lname: "doe",
    age: 23,
    skills: ["Html", "Css", "Js", "Ts", "Angular"]
}

for (const i of person.skills) {
    cl(i.toLowerCase())
}






