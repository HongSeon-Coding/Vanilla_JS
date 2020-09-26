interface Human {
    name:string;
    age:number;
    gender:string;
};

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
sayHi(name, 24, "male");
sayHello(person);
export {};