"use strict";
// class Person {
//     name: string;
//     age: number;
//     public constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
// 원래 위처럼 써야하는데 밑처럼 써도 된다
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const pc1 = new Person("Mark", 39);
console.log(pc1);
