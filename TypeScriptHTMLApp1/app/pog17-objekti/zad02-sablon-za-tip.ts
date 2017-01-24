var glumac =
    {
        firstName: "Tom",
        lastName: "Hanks",
        sayHello: function () { } //sablon za tip
    }

glumac.sayHello = function () { console.log("hello " + glumac.firstName) }

glumac.sayHello()