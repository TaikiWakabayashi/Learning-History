// インターセクション型
type Engineer = {
  name: string;
  role: string;
  usePc: string;
};

type Blogger = {
  name: string;
  follower: number;
};

// インターセクション型は含むもの全てないと基本的にはNG.
type EngineerBlogger = Engineer & Blogger;

// 被っているものは1つでも良い。
const person1: EngineerBlogger = {
  name: "Smith",
  role: "front-end",
  usePc: "Mac",
  follower: 1000,
};

type tmp = string & number; // オブジェクト型以外（プリミティブ等）では、never型

// interfaceの場合
interface Function1 {
  color: string;
  hobby: string;
  age: number;
}

interface Function2 {
  gender: string;
  from: string;
  role: String;
}

interface createPerson extends Function1, Function2 {}

class NewPerson implements createPerson {
  constructor(
    public color: string,
    public hobby: string,
    public age: number,
    public gender: string,
    public from: string,
    public role: string
  ) {}
}

// こんな複合型も可能。
type NumberBoolean = number | boolean;
type StringNumber = string | number;
// ミックス
type Mix = NumberBoolean & StringNumber; // defaultはnumber型
