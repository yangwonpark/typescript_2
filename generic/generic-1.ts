function helloString(message: string): string {
    return message;
}

function helloNumber(message: number): number {
    return message;
}

// 들어오는 인자와 나가는 return type이 같은 로직을 반복하는 함수
// 이렇게 반복된다고 냅다 any로 통일시켜서 쓰면
function hello(message: any): any {
    return message;
}

// 이렇게 밑처럼 string을 넣든 nubmer를 넣든 any로 처리하기 때문에
// 사실상 lenght라는 함수는 정상 작동을 할 수 없다
// 즉 컴파일 시에 에러는 발생하지 않지만, 런타임 시에 예상치 못한 문제가 발생한다
console.log(hello("Mark").length);
console.log(hello(39).length);


// 위의 문제를 막기 위해서 Generic을 사용한다 => 뭐가 들어올지는 모르지만 들어오면 일단 하나로 통일한다
// T에 들어가는 type이 모두 공통적이게 사용된다
function helloGeneric<T>(message: T): T {
    return message;
}

console.log(helloGeneric("Mark").length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));










