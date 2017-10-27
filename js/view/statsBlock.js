import AbstractView from './abstract-view';

export default class StatsBlock extends AbstractView {
  constructor(answer) {
    super();
    this.data = answer;
  }

  getMarkup() {
    return `
    <div class="stats">
      <ul class="stats">
          ${this.data.map((item)=>`<li class="stats__result stats__result--${item}"></li>`).join('')}
      </ul>
    </div>
        `;
  }
}
