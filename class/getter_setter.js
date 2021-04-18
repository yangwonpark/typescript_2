"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        console.log("get");
        return this._name + "Lee";
    }
    // setter는 return이 없고 argument가 있음
    set name(name) {
        console.log("set");
        this._name = name;
    }
}
const pc1 = new Person("Mark", 39);
console.log(pc1.name); // getter
pc1.name = "Woongjae"; // setter
console.log(pc1.name); // getter
