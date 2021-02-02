class Parent{
    constructor(){
        this.fatherName = "Alim Uddin";
    }
}

class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child('Shipa');
console.log(baby);

const baby2 = new Child('tom');
console.log(baby2.getFullName());