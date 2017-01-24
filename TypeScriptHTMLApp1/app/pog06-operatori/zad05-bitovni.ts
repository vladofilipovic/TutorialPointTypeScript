var a: number = 2;   // Bit presentation 10 
var b: number = 3;   // Bit presentation 11

var rezLogOper;

rezLogOper = (a & b);
console.log("(a & b) => ", rezLogOper)

rezLogOper = (a | b);
console.log("(a | b) => ", rezLogOper)

rezLogOper = (a ^ b);
console.log("(a ^ b) => ", rezLogOper);

rezLogOper = (~b);
console.log("(~b) => ", rezLogOper);

rezLogOper = (a << b);
console.log("(a << b) => ", rezLogOper);

rezLogOper = (a >> b);
console.log("(a >> b) => ", rezLogOper);