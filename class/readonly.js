"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "Mark";
        this.country = "Korea"; // 생성자 함수 안에서도 초기화 가능
    }
    hello() {
        // this.country = 'China';
    }
}
const pc1 = new Person("Mark", 39);
console.log(pc1.name);
// pc1.name = "Woongjae";       
console.log(pc1.name);
