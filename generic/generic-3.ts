// array는 둘 중 하나 즉, union으로 나옴
function helloArray<T>(message: T[]): T {
    return message[0];
}

helloArray(["Hello", "World"]);
helloArray(["Hello", 5]);

// tuptle은 정확하게 데이터값을 뽑아옴
function helloTuple<T, K>(message: [T, K]): T {
    return message[0];
}

helloTuple(["Hello", "World"]);
helloTuple(["Hello", 5]);