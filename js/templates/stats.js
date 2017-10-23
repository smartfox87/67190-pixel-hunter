import getElementFromTemplate from '../getElementFromTemplate';

import draw from '../draw.js';
import intro from '../templates/intro';

import {smallHeader} from './header.js';

export default () => {

  const finalResult = {
    win: 'Победа!',
    lose: 'Ну так...',
    square: 'Ровно!'
  };

  const score1 = {
    number: '1.',
    points: '×&nbsp;100',
    total: '900',
    bonus1: {
      forWhat: 'Бонус за скорость:',
      extra: '1&nbsp;',
      points: '×&nbsp;50',
      total: '50'
    },
    bonus2: {
      forWhat: 'Бонус за жизни:',
      extra: '2&nbsp;',
      points: '×&nbsp;50',
      total: '100'
    },
    bonus3: {
      forWhat: 'Штраф за медлительность:',
      extra: '2&nbsp;',
      points: '×&nbsp;50',
      total: '-100'
    },
    finalscore: '950'
  };

  const result1 = (`
  <table class="result__table">
    <tr>
      <td class="resultNumber">${score1.number}</td>
      <td colspan="2">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
      </td>
      <td class="resultPoints">${score1.points}</td>
      <td class="resultTotal">${score1.total}</td>
    </tr>
    <tr>
      <td></td>
      <td class="resultExtra">${score1.bonus1.forWhat}</td>
      <td class="resultExtra">${score1.bonus1.extra}<span class="stats__result stats__result--fast"></span></td>
      <td class="resultPoints">${score1.bonus1.points}</td>
      <td class="resultTotal">${score1.bonus1.total}</td>
    </tr>
    <tr>
      <td></td>
      <td class="resultExtra">${score1.bonus2.forWhat}</td>
      <td class="resultExtra">${score1.bonus2.extra}<span class="stats__result stats__result--heart"></span></td>
      <td class="resultPoints">${score1.bonus2.points}</td>
      <td class="resultTotal">${score1.bonus2.total}</td>
    </tr>
    <tr>
      <td></td>
      <td class="resultExtra">${score1.bonus3.forWhat}</td>
      <td class="resultExtra">${score1.bonus3.extra}<span class="stats__result stats__result--slow"></span></td>
      <td class="resultPoints">${score1.bonus3.points}</td>
      <td class="resultTotal">${score1.bonus3.total}</td>
    </tr>
    <tr>
      <td colspan="5" class="resultTotal  resultTotal--final">${score1.finalscore}</td>
    </tr>
  </table>`);

  const score2 = {
    number: '2.',
    points: '',
    total: 'fail'
  };

  const result2 = (`
    <table class="result__table">
      <tr>
        <td class="resultNumber">${score2.number}</td>
        <td>
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--wrong"></li>
          </ul>
        </td>
        <td class="resultTotal">${score2.points}</td>
        <td class="resultTotal  resultTotal--final">${score2.total}</td>
      </tr>
    </table>`);

  const score3 = {
    number: '3.',
    points: '×&nbsp;100',
    total: '900',
    bonus1: {
      forWhat: 'Бонус за жизни:',
      extra: '2&nbsp;',
      points: '×&nbsp;50',
      total: '100'
    },
    finalscore: '1000'
  };

  const result3 = (`
    <table class="result__table">
      <tr>
        <td class="resultNumber">${score3.number}</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </td>
        <td class="resultPoints">${score3.points}</td>
        <td class="resultTotal">${score3.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="resultExtra">${score3.bonus1.forWhat}</td>
        <td class="resultExtra">${score3.bonus1.extra}<span class="stats__result stats__result--heart"></span></td>
        <td class="resultPoints">${score3.bonus1.points}</td>
        <td class="resultTotal">${score3.bonus1.total}</td>
      </tr>
      <tr>
        <td colspan="5" class="resultTotal  resultTotal--final">${score3.finalscore}</td>
      </tr>
    </table>
  `);

  const result = (`
    <div class="result">
      <h1>${finalResult.win}</h1>
      ${result1}
      ${result2}
      ${result3}
    </div>
  `);

  const stats = getElementFromTemplate(`
    ${smallHeader}
    ${result}
  `);

  stats.querySelector('.header__back').addEventListener('click', () => {
    draw(intro());
  });

  return stats;
};
