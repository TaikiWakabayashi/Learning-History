/**
 * 引数の受け取り方
 */

import { iteratee } from "lodash";

/**
 *
 * @param value
 * @returns
 *
 * 関数名と引数()の間に<>を追記する。（中の文字はなんでも良い）
 *
 * 型を引数として受け取ることができるのがジェネリクスの特徴。
 */
function copy<T>(value: T): T {
  let user: T;
  return value;
}
/**
 * 呼び出す時は以下のような書き方。
 * <>内に希望する型を記載して呼び出し。
 */
console.log(copy<string>("Hello"));

/**
 * ジェネリクスでは呼び出しの際、
 * ジェネリクスを省略しても、正確な型推論が行われる。
 */
function returnValue<T>(value: T): T {
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

function returnValue2<T extends { name: string }>(value: T): T {
  // フィールドにアクセスすることも可能。
  let user: string = value.name;
  return value;
}
console.log(returnValue2({ name: "US agent" }));

/**
 * keyof演算子
 */
/**
 * 代入したオブジェクトのkeyの名前をリテラル型として、
 * そのリテラル型のユニオン型を作成する。
 */
type K = keyof { name: string; age: number };

/**
 * ジェネリクスと一緒に応用的な使い方をすると
 */
/**
 * 例）
 * 引数に渡したオブジェクトのキーを引数に
 * 値を返す。
 *
 */
function returnValue3<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
) {
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
class LightDataBase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}

const stringLightDataBase = new LightDataBase<string>();
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
class Union<T extends string | number | boolean> {
  /**
   * valueにはstring,number,boolean全て入る。
   */
  private value: T;
  constructor(value: T) {
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
class Generics<T> {
  /**
   * valueにはstring,number,boolean全て入る。
   */
  private value: T;
  constructor(value: T) {
    this.value = value;
  }
  get() {
    return this.value;
  }
}
/**
 * タイプやインターフェースもジェネリクスを使える。
 */
type database<T> = {
  id: number;
  data: T[];
};
interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

/**
 * Utilityタイプ
 *
 * Utilityタイプとは
 * 「型のライブラリ」のこと
 *
 * インポートをしなくてもタイプスクリプトが内蔵している
 * 型のライブラリ
 */
interface Todo {
  title: string;
  text: string;
}
/**
 * Partial型
 * Utility型の１つ。
 * ジェネリクスに指定した引数がオブジェクトの場合、
 * フィールドを全てオプショナルにした型にして返す。
 */
type Todoable = Partial<Todo>;

/**
 * Readonly
 * 指定した引数がオブジェクトの時、フィールドを全てreadonlyにして返す。
 */
type ReadTodo = Readonly<Todo>;

/**
 * ”デフォルト” のジェネリクスのパラメータを指定する方法
 */
interface ResponseData<T = any> {
  data: T;
  status: number;
}
/**
 * T = 型
 * とする事で、指定しなかった場合は = の型が入る。
 */
let tmp: ResponseData;

/**
 * mapped type
 *
 * 型のfor文
 * 使うことで、反復処理でオブジェクトの型を作成できる。
 *
 * 記入方法はユニオン型。
 */

/**
 * 作成された型
 * type Vegetable = {
    tomato: "tomato";
    pumpkin: "pumpkin";
}
 */
type Vegetable = {
  [P in "tomato" | "pumpkin"]: P;
};

/**
 * keyofとの応用
 *
 * keyofもユニオン型を返すので、
 * inの後に記入できる。
 */
interface Meet {
  Beef: string;
  chicken: string;
  poke: string;
  rum: string;
}

type MappedTypes = {
  [P in keyof Meet]: P;
};

/**
 * 使い方次第では、
 * 型を利用して新たな型を作成することが可能。
 */
interface Brand {
  name: string;
  age?: number;
  from: string;
}

type MappedTypes2 = {
  [P in keyof Meet]: Brand;
};

const meets: MappedTypes2 = {
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
 * readonlyやオプショナルつけることも可能
 */
type MappedTypes3 = {
  readonly [P in keyof Meet]: string;
};
/**
 * 完成した型
 * type MappedTypes3 = {
    readonly Beef: string;
    readonly chicken: string;
    readonly poke: string;
    readonly rum: string;
}
 */
type MappedTypes4 = {
  [P in keyof Meet]?: string;
};
/**
 * type MappedTypes4 = {
    Beef?: string | undefined;
    chicken?: string | undefined;
    poke?: string | undefined;
    rum?: string | undefined;
}
 */

/**
 * conditional types
 *
 * 型のif文（三項演算子に近い）
 *
 * 【解説】
 * "tomato"が、string型を代入できるのなら、number
 * できないのなら（conditionalTypesは）boolean型となる。
 */
type conditionalTypes = "tomato" extends string ? number : boolean;

/**
 * inter = 推論
 *
 * inter R はanyのようなもの
 *
 * interの使い道は、まず左の対象のものが、interを含む型にマッチするかどうかの簡単な確認をするときに使用する。
 * マッチしたら、interは左の型から最も近い型を推論してRにその型を与える。
 */

type conditionalTypesInfer = { tomato: "tomato" } extends { tomato: infer R }
  ? R
  : boolean;
// conditionalTypesInfer は "tomato"型

/**
 * DistributiveConditionalTypes
 */
type DistributiveConditionalTypes<T> = T extends "tomato" ? number : boolean;
/**
 * 左側がユニオン型だった場合の処理を行う
 *
 * let temp: number | boolean　となる。
 */
let temp: DistributiveConditionalTypes<"tomato" | "pumpkin">;

/**
 * 返ってくる型がユニオン型になるのは、ジェネリクスを使用した時だけ。
 * 使わなかった場合はどちらかが代入される。
 *
 * type DistributiveConditionalTypesSingle = boolean
 *
 * 【仕組み】
 * まず"tomato"のみを考え、tomato = tomatoができるか確認。
 * 可能なのでnumber型。
 * 次に"pumpkin"のみを考え、pumpkin = tomatoができるか確認。
 * できないのでboolean。
 *
 * DistributiveConditionalTypesSingleはどちらか一方しか入らないので、
 * booleanが入る。
 */
type DistributiveConditionalTypesSingle = "tomato" | "pumpkin" extends "tomato"
  ? number
  : boolean;
/**
 * どういう時に使えるか
 */
type nonNull<T> = T extends null | undefined ? never : T;
