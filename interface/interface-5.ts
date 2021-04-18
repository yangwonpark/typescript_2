interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

// interface를 상속받을 경우 interface의 구현부를 class가 항상 포함해야함
class Person implements IPerson1 {
    name: string;
    age?: number | undefined;

    // name이 초기화가 되어있지 않으므로
    // constructor로 초기화 시켜줌~
    constructor(name: string) {
        this.name = name;
    }
    hello(): void {
        console.log(`안녕하세요! ${this.name} 입니다.`);    
    }
}

// constructor의 인자 값을
// new로 인스턴스를 생성할 때 넣어줘야함(여기선 name: string)
const person: IPerson1 = new Person('Mark');
person.hello();



