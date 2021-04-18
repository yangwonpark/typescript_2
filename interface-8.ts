interface Person8 {
    name: string;
    age?: number;
    // readonly
    // 뜻 그대로 읽기만 가능
    readonly gender: string;
}

const p81: Person8 = {
    name: "Mark",
    gender: "male",
};

// readonly 속성이라 쓸 수 없음
// p81.gender = 'female';