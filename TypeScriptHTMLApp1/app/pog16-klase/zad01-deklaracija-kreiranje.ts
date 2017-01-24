class Car { //field
    engine: string;
    //constructor
    constructor(engine: string) {
        this.engine = engine
    }
    //function
    disp(): void {
        console.log("Engine is : " + this.engine)
    }
}

var auto1 = new Car("Engine 1")
var auto2 = new Car("Engine 2")