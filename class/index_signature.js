"use strict";
// index signature
// property를 동적으로 처리하고자 할 때 사용한다
/*
    class => object
    { mark: 'male', jade: 'male' }
    { chloe: 'female', alex: 'male', anna: 'female' }

*/
class Students {
}
const a = new Students();
a.mark = 'male';
a.jade = 'male';
console.log(a);
const b = new Students();
b.chloe = 'female';
b.alex = 'male';
b.anna = 'female';
console.log(b);
