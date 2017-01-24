interface IParent1
{ v1: number }

interface IParent2
{ v2: number }

interface IChild extends IParent1, IParent2
{ }

var Iobj: IChild = {v1: 12, v2: 23}
console.log("Iobj - value 1: " + Iobj.v1 + " value 2: " + Iobj.v2)
console.log("this - value 1: " + this.v1 + " value 2: " + this.v2)