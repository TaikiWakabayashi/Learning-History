/**
 * タグ付きユニオン
 *
 * デザインパターンの一種。
 * それぞれの型に対し、その型しか持たない固有のプロパティを持たせることで、
 * そのプロパティを「タグ」として扱い。条件式で判別する。
 *
 * 型ガードにも利用可能。
 */
type language = {
  kind: "Typescript";
  name: string;
  role: string;
};

type corder = {
  kind: "back-end";
  name: string;
  position: string;
};

type mixType = language | corder;

// タグ付けユニオンによる条件分岐
function checkType(obj: mixType): void {
  switch (obj.kind) {
    case "back-end":
      console.log(obj.position);
      break;
    case "Typescript":
      console.log(obj.role);
      break;
  }
}
