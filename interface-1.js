"use strict";
// 실제로 컴파일이 완료되었을 때는 사라짐
// compile 타임에만 필요하다
function hello1(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + person.name + " \uC785\uB2C8\uB2E4.");
}
var p1 = {
    name: "Mark",
    age: 39
};
hello1(p1);
