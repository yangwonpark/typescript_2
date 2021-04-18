"use strict";
// javascript는 es6에서 부터 클래스 사용 가능
class Person {
    // 생성자에서 name: string을 넣어줘야
    // new로 인스턴스 생성 시 string을 받아올 수 있음
    constructor(name) {
        this.name = name;
    }
}
const pc1 = new Person("Mark");
console.log(pc1);
