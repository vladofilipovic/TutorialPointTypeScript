interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

var musterija: IPerson = {
    firstName: "Miki", lastName: "Manojlović",
    sayHi: (): string => { return "Ćao" }
}
console.log("Musterija objekat ")
console.log(musterija.firstName)
console.log(musterija.lastName)
console.log(musterija.sayHi())

var zaposleni: IPerson = {
    firstName: "Žarko", lastName: "Žarković",
    sayHi: (): string => { return "Pozdrav!!!" }
}
console.log("Employee objekat ")
console.log(zaposleni.firstName)
console.log(zaposleni.lastName)
console.log(zaposleni.sayHi())