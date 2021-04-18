class Person {
    // 초기화 시키지 않으면 에러가 발생함
    // tsconfig에서 strict옵션이 true이기 때문1
    // 그 중 strictPropertyInitialization, strictNullChecks
    name: string = "Mark";
   
    // 변수명에 !를 붙여줌으로써 class 생성 시점 말고 나중에 따로 초기화할 것을 명시적으로 표현함
    // 문제는 나중에 초기화를 하지 않아도 런타임 전에 에러가 뜨지 않으므로 조심해야함
    // age!: number;
    age: number;

    // 생성자를 구현하면 default 생성자는 사라진다(java와 같음)
    // 생성자에서는 async를 설정할 수 없다
    constructor(age?: number) {
        // 생성자 안에서 age에 값을 부여함으로써 !를 붙이지 않아도 에러가 발생하지 않음
        if(age === undefined) {
            this.age = 20;
        } else {
            this.age = age;
        }

    }

    // javascript는 오버로딩이 안됌 (ts에선 가능하긴하다)
}

// class는 자료형으로 사용됨
const pc1: Person = new Person(39);
// constructor에서 age? 이렇게 optional을 부여
// 따라서 생성자에 age인자가 없어도 가능하게 만듬 (굳이 오버로딩을 사용하지 않음)
// 그리고 if문을 통해서 type guard를 해줌
const pc2: Person = new Person();
// p1.age = 39;
console.log(pc1);
console.log(pc1.age);