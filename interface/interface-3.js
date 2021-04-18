"use strict";
function hello3(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + person.name + " \uC785\uB2C8\uB2E4.");
}
var p31 = {
    name: 'Mark',
    age: 39
};
var p32 = {
    name: "Anna",
    // interface부분에서 [index: string]: any;   이거에 대응
    systers: ['Sung', 'Chan'],
};
var p33 = {
    name: "Bokdaengi",
    father: p31,
    mother: p32
};
