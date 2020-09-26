interface Human {
    name:string;
    age:number;
    gender:string;
};

class SuperMan {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const person ={
    name:"jack",
    age:44,
    gender:"male"
};

const name = "Hello";

const sayHi = (name:string, age:number, gender:string): void => {
    console.log(`My Name is ${name}`)

}
const sayHello = (person: Human): void => {
    console.log(`Hello My name is ${person.name}, and ${person.age} years old, and ${person.gender}`)
}

// created by class that having name SuperMan
const nice = new SuperMan("Nice", 20, "female");

// called function
sayHi(name, 24, "male");
sayHello(person);
sayHello(nice)
export {};