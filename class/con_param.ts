// // class Person {
// //     name: string;
// //     age: number;

// //     public constructor(name: string, age: number) {
// //         this.name = name;
// //         this.age = age;
// //     }
// // }

// // 원래 위처럼 써야하는데 밑처럼 써도 된다 (private, protected도 가능)
// class Person {
//     public constructor(public name: string, public age: number) {}
// }

// const pc1: Person = new Person("Mark", 39);
// console.log(pc1);