abstract class AbstractPerson {
    protected _name: string = "Mark";

    abstract setName(name: string): void;       // 추상 메소드는 구현부가 없다
}

// 추상 클래스는 new를 사용하여 인스턴스를 생성할 수 없음
// new AbstractPerson();


// 따라서 상속을 통해서 해당 추상 메소드를 완전하게 만들어 사용한다
class APerson extends AbstractPerson {
    setName(name: string): void {
        this._name = name;
    }
}

const ap = new APerson();
ap.setName('K');
