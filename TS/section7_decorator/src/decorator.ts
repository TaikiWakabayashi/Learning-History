/**
 * デコレータを使ってクラスに関数を適応する。
 */

/**
 *
 * @param classTarget
 *
 * デコレータの書き方
 * 引数にはFunctionを入れている。
 * → Classはコンストラクタ関数のシンタックスシュガーであり、
 *  Javascriptの関数は基本的には全てFunctionオブジェクトである。
 *
 * 一つのクラスを引数として取りたいので、Functionで型を設定。
 * →一つのクラスを取るときはFunction！
 */
function Logging(classTarget: Function) {
  console.log("Logging");
  console.log(classTarget);
}

/**
 * この関数が実行されるタイミングは、
 * クラスの定義時に実行される！！！
 *
 * ※インスタンス生成時では無いので注意。
 */
@Logging
class User {
  name = "sample";
  constructor() {
    console.log("user was created!");
  }
}

/**
 * デコレータファクトリーを使用して、
 * デコレータに引数を渡す方法
 */

/**
 *
 * @param classTarget
 *
 * returnで無名関数（デコレータ）を返す関数を作成する。
 * →デコレータファクトリー
 */
function Success(message: string) {
  return function (classTarget: Function) {
    console.log(message);
    console.log(classTarget);
  };
}

@Success("read class")
class Actions {
  name = "sample";
  constructor() {
    console.log("creating!");
  }
}

/**
 * デコレータを使用して簡易的なフレームワークを作成
 */
function Component(template: string, selector: string) {
  /**
   * 引数のconstructorがコンストラクタ関数であることを認識させる必要あり
   * →コンストラクタ関数はインスタンス化できるから
   *→{}（オブジェクト）を記入する＋ new() でコンストラクタ関数であることを伝えられる。

   * new() にはコンストラクタ同様、引数があったなら定義が必要。
   * さまざまなクラスのインスタンス化に対応できるよう、
   * new()の引数には ...args: any[] と書くのが一般的。
   */
  return function (constructor: { new (...args: any[]): { name: string } }) {
    /**
     * インスタンスの生成
     *
     * Jennyクラスのnameプロパティにアクセスするなら、
     * Jennyクラスを一度インスタンス化しないとアクセスできないため。
     */
    const instance = new constructor();

    const mountedElement = document.querySelector(selector);
    if (mountedElement) {
      mountedElement.innerHTML = template;
      mountedElement.querySelector("h1")!.textContent = instance.name;
    }
  };
}

@Component("<h1>{{ name }}</h1>", "#app")
class Jenny {
  name = "jenny";
  age: number;
  constructor(age: number) {
    console.log("hello");
    this.age = age;
  }
}

/**
 * 戻り値にクラスを指定して、新しいクラスを生成する方法
 *
 */
// function textDecorate(template: string, tag: string) {
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     constructor: T
//   ) {
//     /**
//      * ここでデコレータファクトリーの結果をreturnで返すことで、
//      * クラスをインスタンス化した際に新しいクラスを作り出して返す。
//      *
//      * 以下は無名クラスを返す。
//      */
//     return class extends constructor {
//       /**
//        * @param args
//        *
//        * スプレッド構文（残余引数）は、０個以上の要素を要求するので、
//        * 引数なしでもエラーにはならない。
//        */
//       constructor(...args: any[]) {
//         super(...args);
//         const instance = new constructor(32);
//         const mountedElement = document.querySelector(tag)!;
//         if (mountedElement) {
//           mountedElement.innerHTML = template;
//           mountedElement.querySelector("h1")!.textContent =
//             instance.ver.toString();
//         }
//       }
//     };
//   };
// }
function textDecorate(template: string, tag: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    const instance = new constructor();

    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const mountedElement = document.querySelector(tag);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

@textDecorate("<h1>{{ age }}</h1>", "#phone")
class SmartPhone {
  name = "iphone";
  ver: number;
  constructor(ver: number) {
    console.log("do it.");
    this.ver = ver;
  }
}

const sp = new SmartPhone(22);

/**
 * プロパティデコレータ
 */
/**
 * プロパティデコレータの場合は、引数を２つとる。
 *
 * @param target
 * 【クラスプロパティの時】
 * targetにはクラスが入る。
 *
 * 【インスタンスプロパティの時】
 * targetにはオブジェクトのprototypeが入る。
 *
 * @param propertyKey
 * propertyKeyには、プロパティの型が入る。
 */
function PropertyLogging(target: any, propertyKey: string) {
  console.log("propertyLogging");
  console.log(target);
  console.log(propertyKey);
}

class A {
  @PropertyLogging
  firstName = "Sam";
  static lastName = "jackson";
  age: number;
  constructor(age: number) {
    this.age = age;
    console.log("creating");
  }
}
/**
 * 【クラスプロパティ（static)の時】
 *
 * 出力結果は、
 * ①propertyLogging、
 * ②class
 * ③firstName
 *
 * の順番。
 *
 * 【インスタンスプロパティの時】
 *
 * ①propertyLogging、
 * ②{constructor: ƒ}
 * ③firstName
 *
 * の順番。
 *
 *
 * プロパティデコレータはクラスデコレータと違い、
 * returnでは何も返せないので注意！
 */

/**
 * メソッドデコレータについて
 */

function MethodLogging(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  /**
   *
   * @param target
   * @param propertyKey
   * @param descriptor
   *
   * PropertyDescriptor
   * →オブジェクトのメンバが持つ、ブラウザ上で設定されるメンバ郡のこと。
   *
   * 確認方法 = getOwnPropertyDescriptor
   * PropertyDescriptorを設定する方法 = defineProperty
   *
   * value = プロパティの値
   * writable = valueの変更を可能にするかどうか
   * enumerable = for文の処理の際、プロパティを表示するかどうか
   * configurable = descriptorの変更を許可するか
   * get, set = ゲッターとセッター
   */
  console.log("MethodLogging");
  console.log(target); // prototypeを返す
  console.log(propertyKey); // プロパティ名を返す (greeting)
  console.log(descriptor); // descriptorを返す
}
class B {
  firstName = "Sam";
  static lastName = "jackson";
  age: number;
  constructor(age: number) {
    this.age = age;
    console.log("creating");
  }
  @MethodLogging
  greeting() {
    console.log("Hello");
  }
}

/**
 * アクセサデコレータの使い方
 */
function AccessLogging(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("AccessLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}
class C {
  firstName = "Sam";
  static lastName = "jackson";
  constructor(private _age: number) {
    console.log("creating");
  }
  @MethodLogging
  greeting() {
    console.log("Hello");
  }
  /**
   * アクセサデコレータは同じ名前のアクセサは一つにしかつけれられない。
   * また、一番上のもの（先頭）につけるのが基本。
   */
  @enumerable(false)
  @AccessLogging
  get age() {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }
}

/**
 * Descriptor（メソッドデコレータとアクセサデコレータ）は、
 * returnでDescriptor（descriptorの上書き）を返すことができる。
 */
function enumerable(isEnumerable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    return {
      enumerable: isEnumerable,
    };
  };
}

/**
 * パラメータデコレータの使い方
 */
/**
 *
 * @param target
 * @param propertyKey
 * @param parameterIndex
 *
 * parameterIndex → 何番目の引数にパラメータを付与したか
 */
function ParameterLogging(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log("ParameterLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}
class D {
  firstName = "Sam";
  static lastName = "jackson";
  constructor(private _age: number) {
    console.log("creating");
  }
  @MethodLogging
  greeting(@ParameterLogging message: string) {
    console.log(message);
  }

  @enumerable(false)
  @AccessLogging
  get age() {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }
}
