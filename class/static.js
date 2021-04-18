"use strict";
// static을 붙여서 객체를 생성하지 않고 바로 클래스 자체로 접근 가능하게 만든다
class S_Person {
    hello() {
        console.log('안녕하세요', S_Person.CITY);
    }
    change() {
        S_Person.CITY = "LA";
    }
}
S_Person.CITY = "Seoul";
// 객체에선 static method는 method로 인식되지 않는다
const sp1 = new S_Person();
sp1.hello();
const sp2 = new S_Person();
sp2.hello();
// S_Person.hello();
sp1.change();
sp1.hello();
sp2.hello();
