/**
 * Look Up型とは
 *
 * オブジェクトの型の "メンバーが持っている型" にアクセスする
 */
interface Data {
  id: number;
  keyword?: {
    email: string;
    password: string;
  };
  author: {
    firstName: string;
    lastName: string;
  };
}

const data: Data = {
  id: 1,
  author: {
    firstName: "AAA",
    lastName: "BBB",
  },
};

// dataのidの型にアクセスしたい場合
type id = Data["id"]; // number型

// 階層ごとへのアクセスも可能。
type author = Data["author"]["firstName"];

// ユニオン型の利用も可能。
type idAuthor = Data["id" | "author"];
