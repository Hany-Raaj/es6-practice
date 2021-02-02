class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
    }
}

const student1 = new Student(2, 'Mahi');
const student2 = new Student();
console.log(student1, student2);