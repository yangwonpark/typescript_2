class Person {
    public constructor(private _name: string, private age: number) {}

    
    public get name() : string {
        return this._name + " Lee";    
    }
    
    // setter는 return이 없고 argument가 있음
    // setter로 값을 받아올 때 count를 올려준다 이런 식으로 활용 가능
    public set name(name: string) {
        this._name = name;
    }
}

const pc1: Person = new Person("Mark", 39);
console.log(pc1.name);       // getter
pc1.name = "Woongjae";       // setter
console.log(pc1.name);       // getter