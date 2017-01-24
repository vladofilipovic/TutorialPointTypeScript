class Encapsulate {
    str: string = "hello"
    private str2: string = "world"
}

var enc = new Encapsulate()
console.log(enc.str) //accessible
// console.log(enc.str2) //compilation Error as str2 is private