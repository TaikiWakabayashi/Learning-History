import { Foodsable } from "./interfaces";
import { Food } from "./food";

export class Foods implements Foodsable {
  private static instance: Foods;
  elements = document.querySelectorAll<HTMLDivElement>(".food");
  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore: number[] = [];

  private constructor() {
    this.elements.forEach((element) => {
      new Food(element);
    });
  }

  // アクティブになっている要素の配列を取得
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach((element) => {
      if (element.classList.contains("food-active")) {
        this._activeElements.push(element);
      }
    });
    return this._activeElements;
  }

  // アクティブになっている要素の数値を取得する配列を取得
  get activeElementsScore() {
    this._activeElementsScore = [];

    // activeElementsゲッターの実行
    this.activeElements.forEach((element) => {
      const foodScore = element.querySelector(".food_score");
      if (foodScore) {
        /**
         * NUmber() → コンストラクタ関数
         * Numberオブジェクトを作成する。
         *
         * Nullは0
         * 「+」の文字が入っていても、Number()は正の数としてキャストしてくれる。
         */
        this._activeElementsScore.push(Number(foodScore.textContent));
      }
    });
    console.log(this._activeElementsScore);
    return this._activeElementsScore;
  }

  /**
   * シングルtパターンインスタンスの作成
   */
  static getInstance() {
    if (!Foods.instance) {
      Foods.instance = new Foods();
    }

    return Foods.instance;
  }
}
