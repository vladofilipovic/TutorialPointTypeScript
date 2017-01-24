class Root {
    str: string;
}

class Child extends Root
{ }

class Leaf extends Child //indirectly inherits from Root by virtue of inheritance
{ }

var list = new Leaf();
list.str = "hello"
console.log(list.str)