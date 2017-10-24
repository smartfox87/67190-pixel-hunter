import getElementFromTemplate from '../getElementFromTemplate';
import draw from '../draw.js';
import intro from '../templates/intro';

import {fullHeader} from './header.js';
import statsBlock from './statsBlock.js';

import {fillQuestionEach, fillQuestionDrawOrPhoto, fillQuestionOne} from './fillQuestion.js';

import startGame from './startGame';

import questsData from '../data/questsData.js';

// в зависимости от типа вопроса погдрузка нужного шаблона
// заполнение его данными
// выгрузка полностью собранного экрана игры

export default (typeOfQuestion, question) => {

  let questBlock = [];

// блок проверяющий тип вопроса из questsData.question[].type

  switch (typeOfQuestion) {
    case 'two-of-two':
      questBlock = fillQuestionEach(question);
      break;
    case 'tinder-like':
      questBlock = fillQuestionDrawOrPhoto(question);
      break;
    case 'one-of-three':
      questBlock = fillQuestionOne(question);
      break;
    default:
      throw new Error('sorry, wierd question');
  }

  const gameScreen = getElementFromTemplate(`
    ${fullHeader}
    <div class="game">
      ${questBlock}
      ${statsBlock}
    </div>
  `);

// bindhandlers

  let answers = gameScreen.querySelectorAll('.game__answer');

  switch (answers.length) {
    case 0:
      answers = gameScreen.querySelectorAll('.game__option');
      for (const item of answers) {
        item.onclick = (event) => {
          const answer = event.target;
          if (answer.classList.contains('game__option--selected')) {
            sendAnswer(answer.querySelector('img').alt);
          } else {
            sendAnswer(false);
          }

          event.preventDefault();
          draw(startGame());
        };
      }
      break;
    case 2:
      for (const item of answers) {
        item.onclick = (event) => {
          event.preventDefault();
          sendAnswer(event.target.parentElement.querySelector('input[type=radio]').value);

          event.preventDefault();
          draw(startGame());
        };
      }
      break;
    case 4:
      for (const item of answers) {
        item.onclick = (event) => {

          event.preventDefault();
          event.currentTarget.querySelector('input[type=radio]').checked = true;
          event.currentTarget.querySelector('input[type=radio]').readOnly = true;
          const checkedAnswers = gameScreen.querySelectorAll('input[type=radio]:checked');

          if (checkedAnswers.length === 2) {
            const answer = [checkedAnswers[0].value, checkedAnswers[1].value];
            sendAnswer(answer.toString());

            event.preventDefault();
            draw(startGame());
          }
        };
      }
      break;
    default:
      throw new Error('wtf');
  }

  const sendAnswer = (answer) => {
    questsData.answer.push(answer);
  };


  gameScreen.querySelector('.header__back').addEventListener('click', () => {
    draw(intro());
  });

  return gameScreen;
};
