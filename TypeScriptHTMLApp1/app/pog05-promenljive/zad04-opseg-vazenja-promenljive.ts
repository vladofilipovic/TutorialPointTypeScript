var global_num = 12;          //global variable 

class Numbers {
    num_val = 13;             //class variable 
    static sval = 10;         //static field 

    storeNum(): void {
        var local_num = 14;    //local variable 
    }
}

console.log("Global num: " + global_num)
console.log(Numbers.sval)   //static variable  
var objBroj = new Numbers();
console.log("Global num: " + objBroj.num_val) 