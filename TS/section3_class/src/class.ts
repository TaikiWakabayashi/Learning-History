import { stringify } from "querystring";

class Person {
  name: string;
  constructor(name: string) {
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
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // thisを引数に（重要）
  greeting(this: { name: string }) {
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
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greeting(this: Person3) {
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
  greeting() {},

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
  // public は明示しなくてもデフォルト
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  incrementAge() {
    this.age++;
  }

  greeting(this: Sample) {
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
  constructor(public name: string, private age: number) {}

  getAge(this: Sample2) {
    return this.age;
  }
}

const s2 = new Sample2("ピーター", 24);
console.log(s2.name + ":" + s2.getAge()); // ピーター:24

// readonly演算子

class Sample3 {
  /**
   *
   * readonlyは宣言時、もしくはconstructorの中ではまだ代入できる。
   */
  protected readonly gender: string = "man";
  constructor(readonly name: string, private age: number) {
    this.name = "Bazz";
    this.age = 33;
  }
  getAge(this: Sample3) {
    return this.age;
  }
}

/**
 * 継承
 */
class Teacher extends Sample3 {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }

  getName(): string {
    return `My name is ${this.name}`;
  }
  getGender(): string {
    return this.gender; // readonlyは明示的なアクセス修飾子がなければpublicなのでどこでも呼び出せる。
  }
  // オーバーライド
  // getAge(): number {
  //     return this.age; // ageはprivateなのでTeacherからはアクセスできない。
  // }
}

const teacher = new Teacher("Ben", 55, "Math");
console.log(teacher.name);
console.log(teacher.subject);

/**
 * ゲッター・セッター・static
 */

class Hero {
  constructor(private _name: string, private _age: number) {}

  static isAdult(age: number): boolean {
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
  set name(name: string) {
    this._name = name;
  }
  // ゲッター
  get age() {
    return this._age;
  }

  // セッター
  set age(age: number) {
    this._age = age;
  }

  // クラスの中でstaticを参照する方法
  incrementAge(): number {
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
abstract class Human {
  abstract explainJob(): string;
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
  // ③
  private static instance: Single;

  // ①
  private constructor(private name: string, public age: number) {}

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
