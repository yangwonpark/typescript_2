// 기존의 함수를 만드는 것에 <T>만 추가해주면 된다
type HelloFunctionGeneric1 = <T>(message: T) => T;

const helloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
    return message;
};

interface HelloFunctionGeneric2 {
    <T>(message: T): T;
}

const helloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
    return message;
};