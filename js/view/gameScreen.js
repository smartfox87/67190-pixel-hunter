import AbstractView from './abstract-view';
import Application from '../Application';

import StatsBlock from './statsBlock.js';

import {fillQuestionEach, fillQuestionDrawOrPhoto, fillQuestionOne} from '../templates/fillQuestion.js';

export default class GameScreen extends AbstractView {
  constructor(typeOfQuestion, question, answer, sendAnswer) {
    super();
    this.typeOfQuestion = typeOfQuestion;
    this.question = question;
    this.answer = answer;

    this.questBlock = [];

    this._sendAnswer = sendAnswer;
  }

  getMarkup() {
    switch (this.typeOfQuestion) {
      case `two-of-two`:
        this.questBlock = fillQuestionEach(this.question);
        break;
      case `tinder-like`:
        this.questBlock = fillQuestionDrawOrPhoto(this.question);
        break;
      case `one-of-three`:
        this.questBlock = fillQuestionOne(this.question);
        break;
      default:
        throw new Error(`sorry, wierd question`);
    }

    return `
    <div class="game">
      ${this.questBlock}
      ${new StatsBlock(this.answer).getMarkup()}
    </div>
    `;
  }

  bindHandlers() {
    let answers = this.element.querySelectorAll(`.game__answer`);

    switch (answers.length) {
      case 0:
        answers = this.element.querySelectorAll(`.game__option`);
        for (const item of answers) {
          item.onclick = (event) => {
            let answer = event.target.classList.contains(`photo`);
            if (answer) {
              this._sendAnswer(`photo`);
            } else {
              this._sendAnswer(`painting`);
            }
            this.onClick(event);
          };
        }
        break;
      case 2:
        for (const item of answers) {
          item.onclick = (event) => {
            event.preventDefault();
            const answer = event.target.parentElement.querySelector(`input[type=radio]`).value;
            if (answer) {
              this._sendAnswer(answer);
            } else {
              this._sendAnswer(false);
            }
            this.onClick(event);
          };
        }
        break;
      case 4:
        for (const item of answers) {
          item.onclick = (event) => {

            event.preventDefault();
            event.currentTarget.querySelector(`input[type=radio]`).checked = true;
            event.currentTarget.querySelector(`input[type=radio]`).disabled = true;

            const checkedAnswers = this.element.querySelectorAll(`input[type=radio]:checked`);

            if (checkedAnswers.length === 2) {
              const answer = [checkedAnswers[0].value, checkedAnswers[1].value];
              if (answer) {
                this._sendAnswer(answer.toString());
              } else {
                this._sendAnswer(false);
              }
              this.onClick(event);
            }
          };
        }
        break;
      default:
        throw new Error(`wtf`);
    }
  }

  clearHandlers() {
    this.answer.removeEventListener(`click`, this.onClick);
  }

  onClick() {
    Application.showGame();
  }
}
