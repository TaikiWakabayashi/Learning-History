"use strict";
class Score {
    constructor() { }
    get totalScore() {
        const foods = Foods.getInstance();
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector(".score_number").textContent = String(this.totalScore);
    }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}
class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener("click", this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle("food-active");
        const score = Score.getInstance();
        score.render();
        /**
         * thisの解説
         *
         * clickEventHandlerメソッド内のthisはFoodクラスではなく、
         * 引数から渡ってきたelement<div class="food">タグそのものを指しており、エラーになってしまう。
         * （タグそのものにelementというプロパティはない。）
         */
    }
}
class Foods {
    constructor() {
        this.elements = document.querySelectorAll(".food");
        this._activeElements = [];
        this._activeElementsScore = [];
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
const foods = Foods.getInstance();
