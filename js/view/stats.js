import AbstractView from './abstract-view';


export default class Stats extends AbstractView {
  constructor(data) {
    super();
    this.data = data;

    const score1 = {
      number: '1.',
      points: '×&nbsp;100',
      total: `${this.data.player.answer}` * 100,
      bonus1: {
        forWhat: 'Бонус за скорость:',
        extra: `${this.data.player.fast}&nbsp;`,
        points: '×&nbsp;50',
        total: `${this.data.player.fast}` * 50
      },
      bonus2: {
        forWhat: 'Бонус за жизни:',
        extra: `${this.data.base.lives}&nbsp;`,
        points: '×&nbsp;50',
        total: `${this.data.base.lives}` * 50
      },
      bonus3: {
        forWhat: 'Штраф за медлительность:',
        extra: `${this.data.player.slow}&nbsp;`,
        points: '×&nbsp;50',
        total: '-' + `${this.data.player.slow}` * 50
      },
      finalscore: `${this.data.player.total}`
    };

    const result1 = (`
    <table class="result__table">
      <tr>
        <td class="resultNumber">${score1.number}</td>
        <td colspan="2">
          <ul class="stats">
            ${this.data.answer.map((item)=>`<li class="stats__result stats__result--${item}"></li>`).join('')}
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

    this.result = (`
      <div class="result">
        <h1>${this.data.player.result}</h1>
        ${result1}
        ${result2}
        ${result3}
      </div>
    `);
  }

  getMarkup() {
    return `
      ${this.result}
    `;
  }
}
