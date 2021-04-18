interface IPerson {
    name: string;
    age: number;
}

const ip: IPerson = {
    name: "Mark",
    age: 39,
};

// 어떤 개체에 keyof를 붙이면 그 결과물이 type으로 나옴
// 이 때 type은 key의 이름으로된 문자열로 이루어진 union타입으로 나온다
type Keys = keyof IPerson;

const keys: Keys = "name";


// property의 값을 얻어오거나 바꿀 수 있는 함수
// function getProp(obj: IPerson, key: "name" | "age"): string | number {
//     return obj[key];
// }

// 이렇게 쓰고자 할 때, union타입에 따라서 value의 자료형이 달라진다
// 위 getter에서 반환형 string | number 이 부분도 잘못된거다
// function setProp(
//     obj: IPerson,
//     key: "name" | "age",
//     value: string | number
// ): void {
//     obj[key] = value;
// }


// 따라서 위처럼 쓰면 에러

/* IPerson[keyof IPerson]
    => IPerson["name" | "age"]
    => IPerson["name"] | IPerson["age"]
    => string | number
*/

// 밑처럼 하면 union타입으로 나오는게 아니고 string or number 둘 중 하나만 딱 나온다!!!
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

getProp(ip, 'name');
getProp(ip, 'age');

// 이렇게하면 union타입이 아님 => value의 자료형이 딱 맞게 지정된다!!
function setProp<T, K extends keyof T>(
    obj: T,
    key: K,
    value: T[K]
): void {
    obj[key] = value;
}

setProp(ip, "name", "Anna");

