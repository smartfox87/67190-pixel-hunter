import AbstractView from './abstract-view';

import Application from '../Application';

export default () => {

  class Intro extends AbstractView {
    constructor(data) {
      super();
      this.data = data;
    }

    getMarkup() {
      return `
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup>Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
          </div>
          `;
    }

    bindHandlers() {
      this.element.querySelector('.intro__asterisk').addEventListener('click', this.onClick);
    }

    clearHandlers() {
      this.element.querySelector('.intro__asterisk').removeEventListener('click', this.onClick);
    }

    onClick() {
      Application.showGreeting();
    }
 }

  return new Intro().element;
};
