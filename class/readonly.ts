class Person {
    public readonly name:string = "Mark";
    private readonly country: string;
    
    public constructor(private _name: string, private age: number) {
        this.country = "Korea";     // 생성자 함수 안에서도 초기화 가능
    }

    hello() {
        this.country = 'China';
    }
}

const pc1: Person = new Person("Mark", 39);
console.log(pc1.name);      
pc1.name = "Woongjae";       
console.log(pc1.name);      