"use strict";
// 실제로 컴파일이 완료되었을 때는 사라짐
// compile 타임에만 필요하다
function hello1(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p1 = {
    name: "Mark",
    age: 39
};
hello1(p1);
