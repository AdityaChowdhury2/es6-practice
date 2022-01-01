class Parent{
    constructor(){
        this.fatherName = 'Schwerznegger';
    }
}
class Child extends Parent{
    constructor(cName){
        super();
        this.name = cName;
    }
}
const student1 = new Child('Shuvo');
const student2 = new Child("MAhi");
console.log(student1,student2);