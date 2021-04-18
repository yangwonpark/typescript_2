// generic에서 extends는 상속이라기보다는
// generic으로 들어오는 타입에대한 제한을 거는 용도이다!

class PersonExtends<T extends string | number> {
    private _name: T;

    constructor(name: T) {
        this._name = name;
    }
}

new PersonExtends("Mark");
new PersonExtends(39);
// string | number이므로 boolean은 안됌
// new PersonExtends(true);

