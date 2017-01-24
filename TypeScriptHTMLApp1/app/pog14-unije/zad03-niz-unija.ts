var arr2: number[] | string[];
var i: number;

arr2 = [1, 2, 4]
console.log("**numeric array**")
for (i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}

arr2 = ["Mumbai", "Pune", "Delhi"]
console.log("**string array**")
for (i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}