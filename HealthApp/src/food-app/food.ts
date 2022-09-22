import { Foodable } from "./interfaces";
import { Score } from "./score";

export class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
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
