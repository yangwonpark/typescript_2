"use strict";
class ClassName {
    constructor() { }
    static getInstance() {
        if (ClassName.instance === null) {
            // ClassName으로부터 만든 object가 있으면 그걸 return
            ClassName.instance = new ClassName();
        }
        // 없으면 만들어서 return
        return ClassName.instance;
    }
}
ClassName.instance = null;
// 최초니까 object가 없음 => 생성
const ca = ClassName.getInstance();
// object가 생성되어있으므로 공유해서 사용
const cb = ClassName.getInstance();
console.log(ca === cb);
