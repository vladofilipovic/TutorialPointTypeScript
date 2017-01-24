var nums: number[] = new Array(12, 13, 14, 15)

console.log("Printing original array with for.......")
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i])
}
console.log("Printing original array with foreach...")
nums.forEach(s => { console.log(s) });

nums.reverse()  //reverses the array element 

console.log("Printing reversed array with for.......")
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i])
}
console.log("Printing reversed array with foreach...")
nums.forEach(s => { console.log(s) });
