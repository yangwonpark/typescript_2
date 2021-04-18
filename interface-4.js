"use strict";
;
var p41 = {
    name: "Mark",
    age: 39,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + "\uC785\uB2C8\uB2E4");
    },
};
var p42 = {
    name: "Mark",
    age: 39,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + "\uC785\uB2C8\uB2E4");
    }
};
var p43 = {
    name: "Mark",
    age: 39,
    // arrow function은 this의 범위가 달라서 쉽게 사용할 수 없음
    hello: function () {
        // console.log(`안녕하세요! ${this.name}입니다`);
    }
};
p41.hello();
p42.hello();
