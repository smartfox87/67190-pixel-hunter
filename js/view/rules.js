import AbstractView from './abstract-view';
import Header from './header';

import Application from '../Application';

import questsData from '../data/questsData';

export default () => {

  class Rules extends AbstractView {
    constructor(data) {
      super();
      this.data = data;

      this.header = new Header(questsData);
    }

    getMarkup() {

      const rulesMap = {
        rulesTitle: `Правила`,
        rulesDescription: {
          try: `10 раз`,
          time: `30 секунд`,
          wrong: `не более 3х раз`
        },
        rulesInput: `Ваше Имя`,
        rulesButton: `Go!`
      };

      const rulesBlock = (`
        <div class="rules  central--none">
          <h1 class="rules__title">${rulesMap.rulesTitle}</h1>
          <p class="rules__description"> Угадай ${rulesMap.rulesDescription.try} для каждого изображения фото
            <img src="img/photo_icon.png" width="16" height="16"> или рисунок
            <img src="img/paint_icon.png" width="16" height="16" alt=""> .<br> Фотографиями или рисунками могут быть оба изображения.<br> На каждую попытку отводится ${rulesMap.rulesDescription.time}.<br> Ошибиться можно ${rulesMap.rulesDescription.wrong}.<br> <br> Готовы?
          </p>
          <form class="rules__form">
            <input class="rules__input" type="text" placeholder="${rulesMap.rulesInput}">
            <button class="rules__button  continue" type="submit" disabled>${rulesMap.rulesButton}</button>
          </form>
        </div>`);

      return `
        ${this.header.smallHeader()}
        ${rulesBlock}
      `;
    }

    bindHandlers() {
      this.rulesSubmit = this.element.querySelector(`.rules__button`);
      this.rulesSubmit.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        Application.showGame();
      });

      this.element.querySelector(`.rules__input`).oninput = (evt) => {
        if (evt.target.value) {
          this.rulesSubmit.removeAttribute(`disabled`);
        } else {
          this.rulesSubmit.setAttribute(`disabled`, ``);
        }
      };
    }

    clearHandlers() {
      this.rulesSubmit.removeEventListener(`click`, this.onClick);
    }

    onClick(evt) {
      evt.preventDefault();
      Application.showGame();
    }

    focus() {
      this._element.querySelector(`.rules__input`).focus();
    }
 }
  return new Rules().element;
};
