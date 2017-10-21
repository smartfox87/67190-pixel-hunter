import getElementFromTemplate from '../getElementFromTemplate';
import draw from '../draw.js';
import intro from '../templates/intro';

import {fullHeader} from './header.js';
import statsBlock from './statsBlock.js';

import {fillQuestion_Each, fillQuestion_drawOrPhoto, fillQuestion_findOne} from './fillQuestion.js';

import startGame from './startGame';

// в зависимости от типа вопроса погдрузка нужного шаблона
// заполнение его данными
// выгрузка полностью собранного экрана игры

export default (typeOfQuestion, question) => {

  let questBlock = [];

// блок проверяющий тип вопроса из questsData.question[].type

  switch (typeOfQuestion) {
    case 'two-of-two':
      questBlock = fillQuestion_Each(question);
      break;
    case 'tinder-like':
      questBlock = fillQuestion_drawOrPhoto(question);
      break;
    case 'one-of-three':
      questBlock = fillQuestion_findOne(question);
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
  let answers = gameScreen.querySelectorAll('.game__option');

  if (answers === 'undefined') {
    answers = gameScreen.querySelectorAll('.game__answer');
  }

  const handler = (e) => {
    e.preventDefault();
    draw(startGame());
  };

  for (const answer of answers) {
    answer.onclick = handler;
  }

  const goback = gameScreen.querySelector('.header__back').addEventListener('click', () => {
    draw(intro());
  });

  return gameScreen;
};
