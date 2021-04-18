interface Person3 {
    name: string;
    age?: number;
    // indexable type
    // 어떤 이름의 프로퍼티가 와도 다 허용해준다!
    [index: string]: any;
}

function hello3(person: Person3): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
    name:'Mark',
    age: 39
};

const p32: Person3 = {
    name: "Anna",
    // interface부분에서 [index: string]: any;   이거에 대응
    systers: ['Sung', 'Chan'],
}

const p33: Person3 = {
    name: "Bokdaengi",
    father: p31,
    mother: p32
}