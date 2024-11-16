// 1 Задание
class Person {
    name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    Introduce(): void {
        console.log(`My name is : ${this.name} and I am ${this.age} years old`);
    }
}

// 2 Задание
class Student extends Person {
    course: string;
    constructor(name: string, age: number, course: string) {
        super(name , age);
        this.name = name;
        this.age = age;
        this.course = course;
    }
    talkaboutcourse(): void {
        console.log("I am studying " + this.course);
    }
}
let student = new Student("Ramzan", 19, "JavaScript");
student.Introduce();
student.talkaboutcourse();
// 3 Задание
    class StudentModified extends Student {
        constructor(name: string, age: number, course: string) {
            super(name, age, course);
        }
        talkaboutcourse(): void {
            console.log("My name is " + this.name + " and I am " + this.age + " years old" + " and I am studying " + this.course);
        }
    }
    class PersonModified extends Person {
        course: string;
        constructor(name: string, age: number, course: string) {
            super(name, age);
            this.name = name;
            this.age = age;
            this.course = course;
        }
        talkaboutcourse(): void {
            console.log("My name is " + this.name + " and I am " + this.age + " years old" + " and I am studying " + this.course);
        }
    }
    let studentModified = new StudentModified("Ramzan", 19, "JavaScript");
    studentModified.Introduce();
    studentModified.talkaboutcourse();
    let personModified = new PersonModified("Ramzan", 19, "JavaScript");
    personModified.Introduce();
    personModified.talkaboutcourse();
    // 4 Задание
    class animal {
        name:string;
        age:number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        speak(): void {
            console.log("Unknown sound");
        }
    }
    class dog extends animal {
        speak(): void {
            console.log("Woof woof");
        }
    }
    class cat extends animal {
        speak(): void {
            console.log("Meow meow");
        }
    }
    let dog1 = new dog("Rex", 5);
    let cat1 = new cat("Tom", 3);
    dog1.speak();
    cat1.speak();



