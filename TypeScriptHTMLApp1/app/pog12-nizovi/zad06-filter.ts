function jesteDovoljnoVelik(element, index, array) { 
   return (element >= 10); 
} 
          
var prosli = [12, 5, 8, 130, 44].filter(jesteDovoljnoVelik); 
console.log("Test Value : " + prosli );