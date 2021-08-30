// 1. create object using literal way

const first = { id: 34, name: 'bisal', job: 'web developer', rich: true}

// 2. create object using constructor way

const sec = new Object({name: "rahul"});
const sec2 = new Object(first);
// console.log(sec, sec2.name)

// 3. create object using create method
 
const third = Object.create({name: 'abisek'});
// console.log(third.name);

// 4. create object using class

class MyClass {
    constructor (name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;

    }
}

const fourth = new MyClass('arun', 32, "singger");
// console.log(fourth.job);

// 5. create object using function.

function createObject(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
}

const last = new createObject("taun mia", " ami komo na amar sorom kore", " faltu gura guri ");
console.log(last.age);