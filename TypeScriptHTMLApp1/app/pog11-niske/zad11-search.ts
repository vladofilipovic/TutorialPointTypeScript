var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
if (str.search(re) == -1) {
    console.log("Does not contain Apples");
} else {
    console.log("Contains Apples");
} 