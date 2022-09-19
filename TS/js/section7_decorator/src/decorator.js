"use strict";
/**
 * デコレータを使ってクラスに関数を適応する。
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
function Logging(classTarget) {
    console.log("Logging");
    console.log(classTarget);
}
/**
 * この関数が実行されるタイミングは、
 * クラスの定義時に実行される！！！
 *
 * ※インスタンス生成時では無いので注意。
 */
let User = class User {
    constructor() {
        this.name = "sample";
        console.log("user was created!");
    }
};
User = __decorate([
    Logging
], User);
/**
 * デコレータファクトリーを使用して、
 * デコレータに引数を渡す方法
 */
/**
 *
 * @param classTarget
 *
 * returnでデコレータを返す関数を作成する。
 * →デコレータファクトリー
 */
function Success(message) {
    return function (classTarget) {
        console.log(message);
        console.log(classTarget);
    };
}
let Actions = class Actions {
    constructor() {
        this.name = "sample";
        console.log("creating!");
    }
};
Actions = __decorate([
    Success("read class")
], Actions);
/**
 * デコレータを使用して簡易的なフレームワークを作成
 */
function Component(template, selector) {
    /**
     * 引数のconstructorがコンストラクタ関数であることを認識させる必要あり
     * →コンストラクタ関数はインスタンス化できるから
     *→{}（オブジェクト）を記入する＋ new() でコンストラクタ関数であることを伝えられる。
  
     * new() にはコンストラクタ同様、引数があったなら定義が必要。
     * さまざまなクラスのインスタンス化に対応できるよう、
     * new()の引数には ...args: any[] と書くのが一般的。
     */
    return function (constructor) {
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
            mountedElement.querySelector("h1").textContent = instance.name;
        }
    };
}
let Jenny = class Jenny {
    constructor(age) {
        this.name = "jenny";
        console.log("hello");
        this.age = age;
    }
};
Jenny = __decorate([
    Component("<h1>{{ name }}</h1>", "#app")
], Jenny);
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
function textDecorate(template, tag) {
    return function (constructor) {
        return class extends constructor {
            constructor(...args) {
                super(...args);
                console.log(args);
                const mountedElement = document.querySelector(tag);
                const instance = new constructor();
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector("h1").textContent = instance.name;
                }
            }
        };
    };
}
let SmartPhone = class SmartPhone {
    constructor(ver) {
        this.name = "iphone";
        console.log("do it.");
        this.ver = ver;
    }
};
SmartPhone = __decorate([
    textDecorate("<h1>{{ age }}</h1>", "#phone")
], SmartPhone);
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
function PropertyLogging(target, propertyKey) {
    console.log("propertyLogging");
    console.log(target);
    console.log(propertyKey);
}
class A {
    constructor(age) {
        this.firstName = "Sam";
        this.age = age;
        console.log("creating");
    }
}
A.lastName = "jackson";
__decorate([
    PropertyLogging
], A.prototype, "firstName", void 0);
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
function MethodLogging(target, propertyKey, descriptor) {
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
    constructor(age) {
        this.firstName = "Sam";
        this.age = age;
        console.log("creating");
    }
    greeting() {
        console.log("Hello");
    }
}
B.lastName = "jackson";
__decorate([
    MethodLogging
], B.prototype, "greeting", null);
/**
 * アクセサデコレータの使い方
 */
function AccessLogging(target, propertyKey, descriptor) {
    console.log("AccessLogging");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
class C {
    constructor(_age) {
        this._age = _age;
        this.firstName = "Sam";
        console.log("creating");
    }
    greeting() {
        console.log("Hello");
    }
    /**
     * アクセサデコレータは同じ名前のアクセサは一つにしかつけれられない。
     * また、一番上のもの（先頭）につけるのが基本。
     */
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
C.lastName = "jackson";
__decorate([
    MethodLogging
], C.prototype, "greeting", null);
__decorate([
    enumerable(false),
    AccessLogging
], C.prototype, "age", null);
/**
 * Descriptor（メソッドデコレータとアクセサデコレータ）は、
 * returnでDescriptor（descriptorの上書き）を返すことができる。
 */
function enumerable(isEnumerable) {
    return function (target, propertyKey, descriptor) {
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
function ParameterLogging(target, propertyKey, parameterIndex) {
    console.log("ParameterLogging");
    console.log(target); // prototype
    console.log(propertyKey); // greeting
    console.log(parameterIndex); // 0
}
class D {
    constructor(_age) {
        this._age = _age;
        this.firstName = "Sam";
        console.log("creating");
    }
    greeting(message) {
        console.log(message);
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
D.lastName = "jackson";
__decorate([
    MethodLogging,
    __param(0, ParameterLogging)
], D.prototype, "greeting", null);
__decorate([
    enumerable(false),
    AccessLogging
], D.prototype, "age", null);
