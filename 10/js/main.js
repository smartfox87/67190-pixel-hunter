(function () {
'use strict';

const mainContainer = document.querySelector(`main.central`);

var draw = (screen) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(screen.element);
};

const getElementFromTemplate = (content, containerType = `div`) => {
  let node = document.createElement(containerType);
  node.innerHTML = content;
  return node;
};

class AbstractView {
  constructor() {
    this._element = null;
  }

  getMarkup() {
    throw new Error(`Method getMarkup is not defined`);
  }

  bindHandlers() {

  }

  clearHandlers() {

  }

  get element() {
    if (!this._element) {
      this._element = getElementFromTemplate(this.getMarkup);
      this.bindHandlers();
    }

    return this._element;
  }
}

class MarkUp extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get getMarkup() {
    return `
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup>Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
        `;
  }

  bindHandlers() {
    this.element.querySelector(`.intro__asterisk`).onclick = (evt) => {
      evt.preventDefault();
      this.onClick();
    };
  }

  onClick() {
  }
}

class Intro {
  constructor() {
    this.view = new MarkUp();
  }

  init() {
    draw(this.view);
    this.view.onClick = () => {
      Application.showGreeting();
    };
  }
}

var intro = new Intro();

class Greeting$1 extends AbstractView {
  constructor() {
    super();
  }

  get getMarkup() {
    return `
    <div class="greeting  central--blur">
        <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
        <h1 class="greeting__asterisk">*</h1>
        <div class="greeting__challenge">
          <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
          <p>Правила игры просты.<br> Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br> Задача кажется тривиальной, но не думай, что все так просто.<br> Фотореализм обманчив и коварен.<br> Помни, главное — смотреть очень внимательно.</p>
        </div>
        <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
      </div>
        `;
  }

  bindHandlers() {
    this.element.querySelector(`.greeting__continue`).onclick = (evt) => {
      evt.preventDefault();
      this.onClick();
    };
  }

  onClick() {
  }
}

class Greeting {
  constructor() {
    this.view = new Greeting$1();
  }

  init() {
    draw(this.view);
    this.view.onClick = () => {
      Application.showRules();
    };
  }
}

var greeting = new Greeting();

class Header extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  lives() {
    const MAX_LIVES = 3;
    const emptyHeartIcon = `img/heart__empty.svg`;
    const fullHeartIcon = `img/heart__full.svg`;

    let hearts = ``;
    for (let i = 0; i < MAX_LIVES; i++) {
      hearts += `<img src="${this.data.lives > i ? fullHeartIcon : emptyHeartIcon}" class="game__heart" alt="Life" width="32" height="32">`;
    }
    return hearts;
  }

  backHeader() {
    return `
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    `;
  }

  gameHeader() {
    return `
      <h1 class="game__timer">${this.data.timer}</h1>
      <div class="game__lives">
        ${this.lives(this.data.lives)}
      </div>
    `;
  }

  smallHeader() {
    return `
      <header class="header">
        ${this.backHeader()}
      </header>
    `;
  }

  getMarkup() {
    return `
      <header class="header">
        ${this.backHeader()}
        ${this.gameHeader()}
      </header>
    `;
  }

  bindHandlers() {
    this.element.querySelector(`.header__back`).addEventListener(`click`, () => {
      Application.showGreeting();
    });
  }
}

const questsData = {
  base: {
    currentLevel: 0,
    timer: 30,
    lives: 3
  },

  answer: [],

  player: {
    answer: 0,
    correct: 0,
    wrong: 0,
    unknown: 0,
    fast: 0,
    slow: 0,
    total: 0,
    result: ``
  },

  questions: [
    {
      type: `two-of-two`,
      question: `Угадайте для каждого изображения фото или рисунок?`,
      answers: [
        {
          image: {
            url: `http://i.imgur.com/DKR1HtB.jpg`,
            width: 468,
            height: 458
          },
          type: `photo`
        },
        {
          image: {
            url: `https://k32.kn3.net/5C7060EC5.jpg`,
            width: 468,
            height: 458
          },
          type: `painting`
        }
      ],
      correctAnswer: `paint,photo`,
    },
    {
      type: `tinder-like`,
      question: `Угадай, фото или рисунок?`,
      answers: [
        {
          image: {
            url: `http://i.imgur.com/1KegWPz.jpg`,
            width: 705,
            height: 455
          },
          type: `photo`
        }
      ],
      correctAnswer: `paint`
    },
    {
      type: `one-of-three`,
      question: `Найдите рисунок среди изображений`,
      answers: [
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `painting`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        }
      ],
      correctAnswer: `painting`
    },
    {
      type: `one-of-three`,
      question: `Найдите рисунок среди изображений`,
      answers: [
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `painting`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        }
      ],
      correctAnswer: `painting`
    },
    {
      type: `tinder-like`,
      question: `Угадай, фото или рисунок?`,
      answers: [
        {
          image: {
            url: `https://i.imgur.com/DiHM5Zb.jpg`,
            width: 705,
            height: 455
          },
          type: `photo`
        }
      ],
      correctAnswer: `paint`
    },
    {
      type: `two-of-two`,
      question: `Угадайте для каждого изображения фото или рисунок?`,
      answers: [
        {
          image: {
            url: `http://i.imgur.com/1KegWPz.jpg`,
            width: 468,
            height: 458
          },
          type: `photo`
        },
        {
          image: {
            url: `https://k42.kn3.net/CF42609C8.jpg`,
            width: 468,
            height: 458
          },
          type: `painting`
        }
      ],
      correctAnswer: `paint,photo`
    },
    {
      type: `tinder-like`,
      question: `Угадай, фото или рисунок?`,
      answers: [
        {
          image: {
            url: `http://placehold.it/705x455`,
            width: 705,
            height: 455
          },
          type: `photo`
        }
      ],
      correctAnswer: `paint`
    },
    {
      type: `one-of-three`,
      question: `Найдите рисунок среди изображений`,
      answers: [
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `painting`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        }
      ],
      correctAnswer: `painting`
    },
    {
      type: `tinder-like`,
      question: `Угадай, фото или рисунок?`,
      answers: [
        {
          image: {
            url: `http://placehold.it/705x455`,
            width: 705,
            height: 455
          },
          type: `photo`
        }
      ],
      correctAnswer: `paint`
    },
    {
      type: `one-of-three`,
      question: `Найдите рисунок среди изображений`,
      answers: [
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `painting`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        }
      ],
      correctAnswer: `painting`
    },
  ]
};

class Rules$1 extends AbstractView {
  constructor(data) {
    super();
    this.data = data;

    this.header = new Header(questsData);
  }

  get getMarkup() {

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

    this.element.querySelector(`.rules__input`).oninput = (evt) => {
      if (evt.target.value) {
        this.rulesSubmit.removeAttribute(`disabled`);
      } else {
        this.rulesSubmit.setAttribute(`disabled`, ``);
      }
    };

    this.element.querySelector(`.rules__button`).onclick = (evt) => {
        evt.preventDefault();
        this.onClick();
      };
  }

  clearHandlers() {
    this.rulesSubmit.removeEventListener(`click`, this.onClick);
  }

  onClick() {
  }

  focus() {
    this._element.querySelector(`.rules__input`).focus();
  }
}

class Rules {
  constructor() {
    this.view = new Rules$1();
  }

  init() {
    draw(this.view);

    const nextBtn = this.view.element.querySelector(`.rules__button`);
    this.view.onInput = (evt) => {
      nextBtn.disabled = evt.target.value === ``;
    };

    this.view.onClick = () => {
      Application.showGame();
    };

  }
}

var rules = new Rules();

class Stats$2 extends AbstractView {
  constructor(data) {
    super();
    this.data = data;

    const score1 = {
      number: `1.`,
      points: `×&nbsp;100`,
      total: `${this.data.player.answer}` * 100,
      bonus1: {
        forWhat: `Бонус за скорость:`,
        extra: `${this.data.player.fast}&nbsp;`,
        points: `×&nbsp;50`,
        total: `${this.data.player.fast}` * 50
      },
      bonus2: {
        forWhat: `Бонус за жизни:`,
        extra: `${this.data.base.lives}&nbsp;`,
        points: `×&nbsp;50`,
        total: `${this.data.base.lives}` * 50
      },
      bonus3: {
        forWhat: `Штраф за медлительность:`,
        extra: `${this.data.player.slow}&nbsp;`,
        points: `×&nbsp;50`,
        total: `-` + `${this.data.player.slow}` * 50
      },
      finalscore: `${this.data.player.total}`
    };

    const result1 = (`
    <table class="result__table">
      <tr>
        <td class="resultNumber">${score1.number}</td>
        <td colspan="2">
          <ul class="stats">
            ${this.data.answer.map((item)=>`<li class="stats__result stats__result--${item}"></li>`).join(``)}
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
      number: `2.`,
      points: ``,
      total: `fail`
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
      number: `3.`,
      points: `×&nbsp;100`,
      total: `900`,
      bonus1: {
        forWhat: `Бонус за жизни:`,
        extra: `2&nbsp;`,
        points: `×&nbsp;50`,
        total: `100`
      },
      finalscore: `1000`
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

  get getMarkup() {
    return `
      ${this.result}
    `;
  }
}

class Stats {
  init(data) {
    this.view = new Stats$2(data);
    draw(this.view);
    this.view.goBack = () => {
      Application.showGreeting();
    };
  }
}

var Stats$1 = new Stats();

class StatsBlock extends AbstractView {
  constructor(answer) {
    super();
    this.data = answer;
  }

  getMarkup() {
    return `
    <div class="stats">
      <ul class="stats">
          ${this.data.map((item)=>`<li class="stats__result stats__result--${item}"></li>`).join(``)}
      </ul>
    </div>
        `;
  }
}

// три функци заполняющие разметку под принятые данные

const questionsCreate = (src, num, height = `458`, width = `468`, cls = ``) => {
  let questionsMarkDown = (`<div class="game__option">
    <img src="${src}" alt="Option ${num}", height="${height}", width="${width}">
    <label class="game__answer game__answer--photo">
      <input name="question${num}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint ${cls}">
      <input name="question${num}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`
);

  return questionsMarkDown;
};

const fillQuestionEach = (question) => {

  let {question: task, answers: answers} = question;

  let markDown = (`<p class="game__task">${task}</p>

    <form class="game__content">
      ${questionsCreate(answers[0].image.url, 1, answers[0].image.height, answers[0].image.width, answers[0].type)}
      ${questionsCreate(answers[1].image.url, 2, answers[1].image.height, answers[1].image.width, answers[1].type)}
    </form>
  `);

  return markDown;
};

const fillQuestionDrawOrPhoto = (question) => {

  let {question: task, answers: answers} = question;

  let markDown = (`<p class="game__task">${task}</p>

  <form class="game__content  game__content--wide">
    <div class="game__option">
      ${questionsCreate(answers[0].image.url, 1, answers[0].image.height, answers[0].image.width, answers[0].type, `game__answer--wide`)}
    </div>
  </form>
  `);

  return markDown;
};

const fillQuestionOne = (question) => {

  let {question: task, answers: answers} = question;

  let markDown = (`<p class="game__task">${task}</p>

    <form class="game__content  game__content--triple">
      <div class="game__option" class="${answers[0].type}">
        <img src="${answers[0].image.url}" alt="Option 1" width="${answers[0].image.width}" height="${answers[0].image.height}" >
      </div>
      <div class="game__option  game__option--selected ${answers[1].type}">
        <img src="${answers[1].image.url}" alt="Option 2" width="${answers[1].image.width}" height="${answers[1].image.height}" >
      </div>
      <div class="game__option ${answers[2].type}">
        <img src="${answers[2].image.url}" alt="Option 3" width="${answers[2].image.width}" height="${answers[2].image.height}" class="${answers[2].type}">
      </div>
    </form>
  `);

  return markDown;
};

class GameScreen extends AbstractView {
  constructor(typeOfQuestion, question, answer, sendAnswer) {
    super();
    this.typeOfQuestion = typeOfQuestion;
    this.question = question;
    this.answer = answer;

    this.questBlock = [];

    this._sendAnswer = sendAnswer;
  }

  get getMarkup() {
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

const setTime = (game, timer) => {

  if (timer > 30) {
    throw new RangeError(`wtf`);
  }

  let result = Object.assign({}, game);
  result.base.timer = timer;
  return result;
};





const setFinalResult = (game) => {
  if (game.base.lives > 0) {
    let result = Object.assign({}, game);
    result.player.result = `Еееееее!`;
    return result;
  } else {
    let result = Object.assign({}, game);
    result.player.result = `Пфффф(((`;
    return result;
  }
};

const setLives = (game, lives) => {
  let result = Object.assign({}, game);
  result.base.lives = lives;
  return result;
};

const setCurrentLevel = (game, currentLevel) => {
  let result = Object.assign({}, game);
  result.base.currentLevel = currentLevel;
  return result;
};

const getPoints = (game) => {
  let result = Object.assign({}, game);
  result.player.total = result.player.answer * 100 + result.player.fast * 50 + result.base.lives * 50
  - result.player.slow * 50;
  return result;
};



const setAnswer = (game) => {
  let result = Object.assign({}, game);
  result.player.answer = result.player.answer + 1;
  return result;
};

const setFastAnswer = (game) => {
  let result = Object.assign({}, game);
  result.player.fast = result.player.fast + 1;
  return result;
};

const setSlowAnswer = (game) => {
  let result = Object.assign({}, game);
  result.player.slow = result.player.slow + 1;
  return result;
};

const setUnknownAnswer = (game, unknownAnswer) => {
  let result = Object.assign({}, game);
  result.player.unknown = unknownAnswer;
  return result;
};

const setWrongAnswer = (game, wrongAnswer) => {
  let result = Object.assign({}, game);
  result.player.wrong = wrongAnswer;
  return result;
};

const setCorrectAnswer = (game) => {
  let result = Object.assign({}, game);
  result.player.correct = result.player.correct + 1;
  return result;
};

const sliceAnswer = (game, answer) => {
  let copyCat = game.answer.slice(0, game.answer.length);
  copyCat.push(answer);

  let result = Object.assign({}, game);
  result.answer = copyCat;
  return result;
};

class Model {
  constructor(state = questsData) {
    this._state = state;
    // вопрос
  }

  reset() {
    this._state = questsData;
  }

  get state() {
    return this._state;
  }

  getStats() {
    return this._state.answer;
  }

  updateLives(lives) {
    this._state = setLives(this._state, lives);
  }

  hasLevel() {
    return this._state.base.currentLevel + 1;
  }

  tick() {
    this._state = setTime(this._state, this._state.base.timer - 1);
  }

  resetTime() {
    this._state = setTime(this._state, 30);
  }

  timeIsOver() {
    return this._state.base.timer >= 1;
  }

  nextTask() {
    this._state = setCurrentLevel(this._state, this._state.base.currentLevel + 1);
  }

  addAnswer(time) {
    if (time < 10) {
      this._state = sliceAnswer(this._state, `slow`);
      this._state = setSlowAnswer(this._state, this._state.player.slow + 1);
    }
    if (time > 20) {
      this._state = sliceAnswer(this._state, `fast`);
      this._state = setFastAnswer(this._state, this._state.player.fast + 1);
    }
    if (time > 10 && time < 20) {
      this._state = sliceAnswer(this._state, `correct`);
      this._state = setCorrectAnswer(this._state, this._state.player.correct + 1);
    }
    this._state = setAnswer(this._state);
  }

  addUnknownAnswer() {
    this._state = setUnknownAnswer(this._state, this._state.player.unknown + 1);
    this._state = sliceAnswer(this._state, `unknown`);
  }

  addWrongAnswer() {
    this._state = setWrongAnswer(this._state, this._state.player.wrong + 1);
    this._state = sliceAnswer(this._state, `wrong`);
  }

  end() {
    this._state = getPoints(this._state);
    this._state = setFinalResult(this._state);
  }
}

var model = new Model();

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
    let screenGame = getElementFromTemplate(``);

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

    let endGame = getElementFromTemplate(``);
    this.header = this.createHeader();
    endGame.appendChild(this.header);

    endGame.appendChild(new Stats$1(this.model._state).element);

    draw(endGame);
  }

  bindHandlers() {
    this.header.querySelector(`.header__back`).addEventListener(`click`, this.onClick);

    this.header.querySelector(`.header__back`).addEventListener(`click`, () => {
      Application.showGreeting();
    });
  }

  clearHandlers() {
    this.header.querySelector(`.header__back`).removeEventListener(`click`, this.onClick);
  }

  findOne() {
    return event.target;
  }

  onClick() {
    Application.showRules();
  }
}

var gamePresenter = new GamePresenter(model);

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const saveState = (state) => {
  return JSON.stringify(state);
};

const loadState = (dataString) => {
  try {
    return JSON.parse(dataString);
  } catch (e) {
    return ``;
  }
};

const routes = {
  [ControllerId.INTRO]: intro,
  [ControllerId.GREETING]: greeting,
  [ControllerId.RULES]: rules,
  [ControllerId.GAME]: gamePresenter,
  [ControllerId.STATS]: Stats$1
};

class Application {

  static init() {
    const onHashChange = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };
    window.addEventListener(`hashchange`, onHashChange);
    onHashChange();
  }

  static changeHash(id, data) {
    const controller = routes[id];

    if (controller) {
      controller.init(loadState(data));
    }
  }

  static showWelcome() {
    location.hash = ControllerId.INTRO;
  }

  static showGreeting() {
    location.hash = ControllerId.GREETING;
  }

  static showRules() {
    location.hash = ControllerId.RULES;
  }

  static showGame() {
    location.hash = ControllerId.GAME;
  }

  static showStats(data) {
    location.hash = `${ControllerId.STATS}?${saveState(data)}`;
  }
}

Application.init();

}());

//# sourceMappingURL=main.js.map
