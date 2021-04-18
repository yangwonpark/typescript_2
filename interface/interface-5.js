"use strict";
// interface를 상속받을 경우 interface의 구현부를 class가 항상 포함해야함
class Person5 {
    // name이 초기화가 되어있지 않으므로
    // constructor로 초기화 시켜줌~
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}
// constructor의 인자 값을
// new로 인스턴스를 생성할 때 넣어줘야함(여기선 name: string)
const person = new Person5('Mark');
person.hello();
