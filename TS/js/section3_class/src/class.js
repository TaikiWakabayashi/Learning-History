"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Hello my name is ${this.name}`);
    }
}
const ironman = new Person("トニースターク");
console.log(ironman);
ironman.greeting();
/**
 * thisは呼び出し元によって参照先が変わる。
 *
 * multiverseStarkにはnameがないのでundefined
 */
const multiverseStark = {
    anotherGreeting: ironman.greeting,
};
ironman.greeting(); // { name: 'トニースターク' }
multiverseStark.anotherGreeting(); // undefined.
/**
 * 解決方法
 * 引数にthisを指定し、thisが何を指すかを指定する。
 */
class Person2 {
    constructor(name) {
        this.name = name;
    }
    // thisを引数に（重要）
    greeting() {
        console.log(`Hello My name is ${this.name}`);
    }
}
const captainAmerica = new Person2("スティーブ・ロジャース");
const multiverseCaptain = {
    name: "マルチバースロジャース",
    multiverseGreeting: captainAmerica.greeting,
};
captainAmerica.greeting(); // スティーブロジャース
multiverseCaptain.multiverseGreeting(); // マルチバースロジャース
/**
 * 解決方法②
 *
 * thisの型注釈をthis.nameでは無く、クラス名にする。
 */
class Person3 {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}`);
    }
}
const Bakky = new Person3("バッキーバーンズ");
const anotherBakky = {
    name: "マルチバースバッキー",
    anotherGreeting: Bakky.greeting,
};
/**
 * anotherBakky.anotherGreeting(); ←コンパイルエラー。
 *
 * thisはPerson3という型を指しているので、name,greetingを含んでいないと機能しない。
 */
const anotherWinterSoldier = {
    name: "マルチバースバッキー",
    // greeting: Bakky.greeting, or
    greeting() { },
    anotherGreeting: Bakky.greeting, // Person3と同じように、nameとgreetingを持つ仕様でなくては使えない。
};
Bakky.greeting();
anotherWinterSoldier.greeting();
anotherWinterSoldier.anotherGreeting();
/**
 *
 * 【ポイント】
 * thisの参照を別のオブジェクトで使用する場合、クラスの中身と同じ状況でないと機能しない。
 */
/**
 * public , private　は基本的にtypescriptの概念。
 */
class Sample {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age++;
    }
    greeting() {
        console.log(`my name is ${this.name} . I am ${this.age} years old.`);
    }
}
const s1 = new Sample("ニック", 33);
s1.incrementAge();
s1.greeting();
/**
 * 初期化の省略
 */
class Sample2 {
    // これでフィールド宣言を省略できる。
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
const s2 = new Sample2("ピーター", 24);
console.log(s2.name + ":" + s2.getAge()); // ピーター:24
// readonly演算子
class Sample3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        /**
         *
         * readonlyは宣言時、もしくはconstructorの中ではまだ代入できる。
         */
        this.gender = "man";
        this.name = "Bazz";
        this.age = 33;
    }
    getAge() {
        return this.age;
    }
}
/**
 * 継承
 */
class Teacher extends Sample3 {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    getName() {
        return `My name is ${this.name}`;
    }
    getGender() {
        return this.gender; // readonlyは明示的なアクセス修飾子がなければpublicなのでどこでも呼び出せる。
    }
}
const teacher = new Teacher("Ben", 55, "Math");
console.log(teacher.name);
console.log(teacher.subject);
/**
 * ゲッター・セッター・static
 */
class Hero {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    static isAdult(age) {
        if (age > 17) {
            return true;
        }
        return false;
    }
    /**
     * ゲッターもセッターもプロパティ名と同じ名前では宣言できない。
     *
     * ゲッターとセッター同士は同じ名前で宣言できる。
     */
    // ゲッター
    get name() {
        return this._name;
    }
    // セッター
    set name(name) {
        this._name = name;
    }
    // ゲッター
    get age() {
        return this._age;
    }
    // セッター
    set age(age) {
        this._age = age;
    }
    // クラスの中でstaticを参照する方法
    incrementAge() {
        if (Hero.isAdult(this._age)) {
            this._age++;
        }
        return this._age;
    }
}
const h1 = new Hero("Thor", 10000);
// セッターの実行。
h1.name = "ファンタスティック・フォー";
// ゲッターの実行
console.log(h1.name); // ファンタスティック・フォー
// クラスメソッド（static）の実行。
console.log(Hero.isAdult(h1.age)); // true
console.log(h1.incrementAge());
// Abstractクラス・メソッド
class Human {
}
/**
 * シングルトーンパターン
 *
 * → 一つだけしかインスタンス化できなくする
 */
/**
 * ① コンストラクタにprivate修飾子をつける。（外部からのインスタンスが不可能に。）
 *
 * ② クラス内部でインスタンス化し、インスタンスを返すstaticメソッドを作成。
 *
 * ③ メソッドで作成したインスタンスを保持するstaticフィールドを作成。（外部からのアクセスの遮断＋staticからアクセスを可能）。
 *
 * ④ メソッドを実行し、instanceを参照し、値がなければ（undefined）なら新しいインスタンスを作成し返す。
 *   値があれば、既存のインスタンスを返す。
 *
 */
class Single {
    // ①
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // ②
    static getInstance() {
        // ④
        if (Single.instance) {
            return Single.instance;
        }
        Single.instance = new Single("Watcher", 20000);
        return Single.instance;
    }
}
