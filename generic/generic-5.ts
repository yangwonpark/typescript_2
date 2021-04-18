class GPerson<T, K> {
    // class 레벨에서 T의 유효범위가 발생
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

 new GPerson("Mark", 39);
//  new GPerson<string>("Kevin");
// 컴파일 타임에 에러를 미리 체크할 수 있게 해줌
 new GPerson<string, number>("Kaka", 39);

