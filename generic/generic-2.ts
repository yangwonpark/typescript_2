function helloBasic<T, U>(message: T, comment: U): T {
    return message;
}

helloBasic<string, number>("Mark", 39);
// <> 안에 type을 넣지않고 parameter에 바로 값을 넣는 경우
// type은 그 값 자체가 된다
// 즉 밑에서 36을 넣으면 helloBasic<36>(message: 36): 36{} 이런 식으로 된다..
helloBasic(36, 36);