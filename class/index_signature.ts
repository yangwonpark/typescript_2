// index signature
// property를 동적으로 처리하고자 할 때 사용한다
// 초기값을 할당할 필요가 없다 (optional 느낌)

/*
    class => object
    { mark: 'male', jade: 'male' }
    { chloe: 'female', alex: 'male', anna: 'female' }

*/

class Students {
    // mark: string = 'male';

    [index: string]: "male" | "female";

    // mark: "female" = "female";
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