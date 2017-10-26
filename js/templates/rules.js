import getElementFromTemplate from '../getElementFromTemplate';

import startGame from './startGame';
import draw from '../draw';
import intro from '../templates/intro';

import {smallHeader} from './header.js';

export default () => {

  const rulesMap = {
    rulesTitle: 'Правила',
    rulesDescription: {
      try: '10 раз',
      time: '30 секунд',
      wrong: 'не более 3х раз'
    },
    rulesInput: 'Ваше Имя',
    rulesButton: 'Go!'
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

  const rules = getElementFromTemplate(`
    ${smallHeader}
    ${rulesBlock}
  `);

  // Rules
  let rulesSubmit = rules.querySelector('.rules__button');

  rules.querySelector('.rules__input').oninput = (evt) => {
    if (evt.target.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  rulesSubmit.onclick = (e) => {
    e.preventDefault();
    draw(startGame());
  };

  rules.querySelector('.header__back').addEventListener('click', () => {
    draw(intro());
  });

  return rules;
};
