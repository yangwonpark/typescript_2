"use strict";
;
const p41 = {
    name: "Mark",
    age: 39,
    hello: function () {
        console.log(`안녕하세요! ${this.name}입니다`);
    },
};
const p42 = {
    name: "Mark",
    age: 39,
    hello() {
        console.log(`안녕하세요! ${this.name}입니다`);
    }
};
const p43 = {
    name: "Mark",
    age: 39,
    // arrow function은 this의 범위가 달라서 쉽게 사용할 수 없음
    hello: () => {
        // console.log(`안녕하세요! ${this.name}입니다`);
    }
};
p41.hello();
p42.hello();
