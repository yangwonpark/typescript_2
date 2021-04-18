"use strict";
const helloPerson = function (name) {
    console.log(`안녕하세요! ${name} 입니다.`);
};
// const helloPerson의 구현부보다 명시적으로 정해준 타입이 더 큰 영향을 미친다
// 따라서 구현부에 name만 인자로 받았으나
// age를 명시해줘도 에러가 발생하지 않는다
helloPerson("Mark");
helloPerson("Mark", 39);
