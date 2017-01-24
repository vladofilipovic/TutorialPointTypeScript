interface namelist {
    [index: number]: string
}

//var list2: namelist = ["John", 1, "Bran"] //Error. 1 is not type string
var list3: namelist = ["John", "1", "Bran"] //OK

interface ages {
    [index: string]: number
}
var agelist: ages;
agelist["John"] = 15 // OK
//agelist[2] = "nine" // Error