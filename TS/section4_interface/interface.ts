/**
 * interface
 *
 * typeエイリアスのオブジェクト版のようなもの
 */
// typeエイリアス → 全部いける。
type Human = {
  name: string;
  age: number;
};

const h1: Human = {
  name: "Kei",
  age: 4,
};

const h2: Human = {
  name: "jack",
  age: 16,
};

// interface → オブジェクトのみを扱う。
/**
 * interfaceは継承したオブジェクトのイ
 * ンスタンスが持っている必要がある形を型として表したもの。
 *
 * つまり、staticは影響を受けない。
 */
interface Person {
  name: string;
  age: number;
}

/**
 * 使い分け
 *
 * オブジェクト以外 ＝ type
 * オブジェクト ＝ interface
 */

// メソッドの追加
interface Person2 {
  name: string;
  age: number;
  // ①
  greeting: (message: string) => void;
  // ② この指定方法はオブジェクトメソッドでしか定義できない。
  getAge(age: number): number;
}

class Developer implements Person2 {
  constructor(public name: string, public age: number) {}
  // オーバーライド
  greeting(message: string) {
    console.log(message);
  }
  // オーバーライド
  getAge(age: number): number {
    this.age = age;
    return this.age;
  }
}

/**
 * 構造的部分型
 */
interface Symbiote {
  readonly name: string;
  power: string;
  from: string;
  greeting(message: string): void;
}

/**
 * インターフェースを実装したクラスが
 * インターフェースより中身が多くても、インターフェースの条件を満たしていれば
 * それはOKになる。
 *
 * ただし、インターフェース型にした場合は
 * 追加したものは参照できない。
 *
 * readonlyの記述も可能
 * →しかし、readonlyは実装先で無視する事ができる。
 */
class Venom implements Symbiote {
  constructor(
    public name: string,
    public power: string,
    public from: string,
    public color: string
  ) {}
  greeting(message: string) {
    console.log("We are " + message);
  }
}

const venom: Symbiote = new Venom("Venom", "muscle", "earth", "Black");
venom.greeting(venom.name);
//venom.name = "scream"; インスタンスがinterface型ならreadonlyを継ぐのでコンパイルエラー。
// venom.color; コンパイルエラー

const riot = new Venom("Riot", "sword", "nova", "silver");
riot.name = "ライオット"; // クラス型であればreadonlyは無視しているので、代入可能。
console.log(riot.color); // colorの出力も可能。

/**
 * interfaceの継承
 */
interface Namable {
  name: string;
}
interface Age {
  age: number;
}

interface Xmen extends Namable, Age {
  power: string;
}

/**
 * interfaceで型を表現する方法
 */

// interfaceは関数の型も表現できる。

interface addFunc {
  (num1: number, num2: number): number;
}

// 上記は以下と同じ
type addFunc2 = (num1: number, num2: number) => number;

const addFunc: addFunc = (n1: number, n2: number) => {
  return n1 + n2;
};

/**
 * オプションプロパティ
 *
 * プロパティやパラメータに付けられる。
 */
type Options = {
  name: string;
  nickName?: string;
};

// interfaceでも可
interface Options2 {
  name: string;
  nickName?: string;
  age?: number;
  //メソッドでも使用可能
  greeting?(message: string): void;

  // メソッドの引数にオプショナルを使用することも可能
  sleeping(message?: string): void;

  // デフォルト引数(デフォルトパラメータ使いたい用)
  hello(message: string): void;
}

class Obj implements Options2 {
  // オプションプロパティをパラメータに付けるときは、引数の最後に記入しないとコンパイルエラーになる。
  constructor(public name: string, public nickName?: string) {}
  // オプションプロパティは、実装したクラスで初期化しなくても、宣言しなくても良い。
  age?: number;

  sleeping(message?: string | undefined): void {
    if (message === undefined) {
      console.log("皆さんおやすみ...");
    } else {
      console.log(`${message}、おやすみ...`);
    }
  }
  // デフォルト引数(デフォルトパラメータ)を使用したメソッド
  hello(message: string = "hello"): void {
    console.log(message);
  }
}

const o1 = new Obj("thor");
console.log(o1.name + " " + o1.nickName); // thor undefined
o1.sleeping(); // 皆さんおやすみ...
o1.hello(); // hello
o1.hello("アスガルドの民"); // アスガルドの民
