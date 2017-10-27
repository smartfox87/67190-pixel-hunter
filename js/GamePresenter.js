import draw from './utils/draw';
import getElementFromTemplate from './utils/getElementFromTemplate';

import Stats from './view/stats';
import GameScreen from './view/gameScreen.js';

import Application from './Application';
import Header from './view/header';

import model from './model/model';

class GamePresenter {
  constructor(GameModel) {
    this.timer = null;
    this.level = null;
    this.header = null;
    this.content = null;
    this.model = GameModel;

    this.model.updateLives(3);
  }


  startGame() {
    if (!this.model._state.questions[this.model._state.base.currentLevel]
      || this.model._state.base.lives < 1) {
      this.endGame();
    } else {
      this.nextTask();
    }
  }

  createScreenGame() {
    let screenGame = getElementFromTemplate('');

    this.header = this.createHeader();
    screenGame.appendChild(this.header);

    this.content = this.getContentGame();
    screenGame.appendChild(this.content);

    draw(screenGame);
  }

  createHeader() {
    return new Header(this.model.state.base).element;
  }

  updateHeader() {
    const newHeader = this.createHeader();

    this.header.parentElement.replaceChild(newHeader, this.header);
    this.header = newHeader;
  }

  nextTask() {

    this.createScreenGame();
    this.model.nextTask();
    this.startTimer();
  }

  getContentGame() {
    this.content = new GameScreen(
      this.model._state.questions[this.model._state.base.currentLevel].type,
      this.model._state.questions[this.model._state.base.currentLevel],
      this.model._state.answer,
      this.sendAnswer.bind(this)
      ).element;

    return this.content;
  }

  startTimer() {
    this.model.resetTime();
    this.stopTimer();
    this.updateHeader();

    this.timers = setInterval(() => {
      if (!this.model.timeIsOver()) {
        this.stopTimer();
        this.unknownAnswer();
        this.startGame();
        return;
      }

      this.model.tick();
      this.updateHeader();
      this.bindHandlers();
    }, 1000);
  }

  levelAnswer(answer) {
    this.stopTimer();
    this.sendAnswer(answer);
    this.nextTask();
  }

  sendAnswer(answer) {
    const isItCorrect = (this.model._state.questions[this.model._state.base.currentLevel - 1].correctAnswer === answer);
    if (isItCorrect) {
      this.rightAnswer(answer);
    } else {
      this.wrongAnswer();
    }
  }

  unknownAnswer() {
    this.model.updateLives(this.model._state.base.lives - 1);
    this.model.addUnknownAnswer();
  }

  wrongAnswer() {
    this.model.updateLives(this.model._state.base.lives - 1);
    this.model.addWrongAnswer();
  }

  rightAnswer(answer) {
    this.model.addAnswer(this.model._state.base.timer, answer);
  }

  stopTimer() {
    clearInterval(this.timers);
  }

  endGame() {
    this.stopTimer();
    this.model.end();

    let endGame = getElementFromTemplate('');
    this.header = this.createHeader();
    endGame.appendChild(this.header);

    endGame.appendChild(new Stats(this.model._state).element);

    draw(endGame);
  }

  bindHandlers() {
    this.header.querySelector('.header__back').addEventListener('click', this.onClick);

    this.header.querySelector('.header__back').addEventListener('click', () => {
      Application.showGreeting();
    });
  }

  clearHandlers() {
    this.header.querySelector('.header__back').removeEventListener('click', this.onClick);
  }

  onClick() {
    Application.showRules();
  }
}

const gamePresenter = new GamePresenter(model);

export default () => gamePresenter.startGame();
