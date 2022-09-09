"use strict";
const h1 = {
    name: "Kei",
    age: 4,
};
const h2 = {
    name: "jack",
    age: 16,
};
class Developer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // オーバーライド
    greeting(message) {
        console.log(message);
    }
    // オーバーライド
    getAge(age) {
        this.age = age;
        return this.age;
    }
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
class Venom {
    constructor(name, power, from, color) {
        this.name = name;
        this.power = power;
        this.from = from;
        this.color = color;
    }
    greeting(message) {
        console.log("We are " + message);
    }
}
const venom = new Venom("Venom", "muscle", "earth", "Black");
venom.greeting(venom.name);
//venom.name = "scream"; インスタンスがinterface型ならreadonlyを継ぐのでコンパイルエラー。
// venom.color; コンパイルエラー
const riot = new Venom("Riot", "sword", "nova", "silver");
riot.name = "ライオット"; // クラス型であればreadonlyは無視しているので、代入可能。
console.log(riot.color); // colorの出力も可能。
const addFunc = (n1, n2) => {
    return n1 + n2;
};
class Obj {
    // オプションプロパティをパラメータに付けるときは、引数の最後に記入しないとコンパイルエラーになる。
    constructor(name, nickName) {
        this.name = name;
        this.nickName = nickName;
    }
    sleeping(message) {
        if (message === undefined) {
            console.log("皆さんおやすみ...");
        }
        else {
            console.log(`${message}、おやすみ...`);
        }
    }
    // デフォルト引数(デフォルトパラメータ)を使用したメソッド
    hello(message = "hello") {
        console.log(message);
    }
}
const o1 = new Obj("thor");
console.log(o1.name + " " + o1.nickName);
o1.sleeping();
o1.hello();
o1.hello("アスガルドの民");
