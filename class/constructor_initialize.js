"use strict";
class Person {
    // 생성자를 구현하면 default 생성자는 사라진다(java와 같음)
    constructor(age) {
        // 초기화 시키지 않으면 에러가 발생함
        // tsconfig에서 strict옵션이 true이기 때문1
        // 그 중 strictPropertyInitialization, strictNullChecks
        this.name = "Mark";
        // 생성자 안에서 age에 값을 부여함으로써 !를 붙이지 않아도 에러가 발생하지 않음
        this.age = age;
    }
}
// class는 자료형으로 사용됨
const pc1 = new Person(39);
// p1.age = 39;
console.log(pc1);
console.log(pc1.age);
