"use strict";
/**
 * 引数の受け取り方
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param value
 * @returns
 *
 * 関数名と引数()の間に<>を追記する。（中の文字はなんでも良い）
 *
 * 型を引数として受け取ることができるのがジェネリクスの特徴。
 */
function copy(value) {
    let user;
    return value;
}
/**
 * 呼び出す時は以下のような書き方。
 * <>内に希望する型を記載して呼び出し。
 */
console.log(copy("Hello"));
/**
 * ジェネリクスでは呼び出しの際、
 * ジェネリクスを省略しても、正確な型推論が行われる。
 */
function returnValue(value) {
    return value;
}
/**
 * 引数の型が、呼び出しの際に引数に渡されたものを見て
 * 型推論をし、他のTに反映してくれる。
 */
console.log(returnValue({ name: "Wolf" }));
/**
 * 型パラメータに制約をつける方法
 */
/**
 * 例）
 * オブジェクトであり、nameというkeyがあり、string型である。
 */
function returnValue2(value) {
    // フィールドにアクセスすることも可能。
    let user = value.name;
    return value;
}
console.log({ name: "US agent" });
/**
 * ジェネリクスと一緒に応用的な使い方をすると
 */
/**
 * 例）
 * 引数に渡したオブジェクトのキーを引数に
 * 値を返す。
 *
 */
function returnValue3(value, key) {
    let keyValue = value[key];
    if (typeof keyValue === "string") {
        return keyValue;
    }
    return keyValue;
}
console.log(returnValue3({ name: "メイウェザー", age: 54 }, "age")); // 54
/**
 * クラスでジェネリクスを使用する。
 *
 * クラスの名前の後に<>をつける。
 */
class LightDataBase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDataBase = new LightDataBase();
stringLightDataBase.add("MAC");
stringLightDataBase.add("Microsoft");
stringLightDataBase.remove("MAC");
console.log(stringLightDataBase.get());
/**
 * ユニオン型との違い
 *
 * ユニオン型で指定すると、指定したものを全て許容してしまうので、
 * 柔軟すぎて安全性が保てなくなる。
 */
class Union {
    constructor(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
}
/**
 * ジェネリクスでは、引数で入れた型が、
 * 今後全てのジェネリクスに共有されて絞られるので、
 * 入口の引数では許容範囲は大きいが、その後は全て統一される。
 */
class Generics {
    constructor(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
}
const tmpDatabase = {
    id: 3,
    data: [32],
};
/**
 * T = 型
 * とする事で、指定しなかった場合は = の型が入る。
 */
let tmp;
const meets = {
    Beef: {
        name: "松坂牛",
        age: 5,
        from: "松坂",
    },
    chicken: {
        name: "名古屋コーチン",
        from: "名古屋",
    },
    poke: {
        name: "TOKYO X",
        from: "東京",
    },
    rum: {
        name: "ジンギスカン",
        from: "北海道",
    },
};
/**
 * 左側がユニオン型だった場合の処理を行う
 *
 * let temp: number | boolean　となる。
 */
let temp;
