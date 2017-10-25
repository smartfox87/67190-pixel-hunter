(function () {
'use strict';

const getElementFromTemplate = (content, containerType = `div`) => {
  let node = document.createElement(containerType);
  node.innerHTML = content;
  return node;
};

const questsData = {
  base: {
    currentLevel: 0,
    timer: 30,
    lives: 3
  },

  answer: [],

  player: {
    correct: 0,
    wrong: 0,
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
  ]
};

const draw = (page) => {
  let mainElement = document.querySelector(`#main`);

  mainElement.innerHTML = ``;
  mainElement.appendChild(page);
};

const backHeader = `<div class="header__back">
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
</div>`;

const gameHeader = `<h1 class="game__timer">${questsData.base.timer}</h1>
<div class="game__lives">
  <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
</div>`;

const smallHeader = `
  <header class="header">
    ${backHeader}
  </header>`;

const fullHeader = `
  <header class="header">
    ${backHeader}
    ${gameHeader}
  </header>`;

var stats = () => {

  const finalResult = {
    win: 'Победа!',
    lose: 'Ну так...',
    square: 'Ровно!'
  };

  const score1 = {
    number: '1.',
    points: '×&nbsp;100',
    total: `${questsData.player.answer}` * 100,
    bonus1: {
      forWhat: 'Бонус за скорость:',
      extra: `${questsData.player.fast}&nbsp;`,
      points: '×&nbsp;50',
      total: `${questsData.player.fast}` * 50
    },
    bonus2: {
      forWhat: 'Бонус за жизни:',
      extra: `${questsData.base.lives}&nbsp;`,
      points: '×&nbsp;50',
      total: `${questsData.base.lives}` * 50
    },
    bonus3: {
      forWhat: 'Штраф за медлительность:',
      extra: `${questsData.player.slow}&nbsp;`,
      points: '×&nbsp;50',
      total: '-' + `${questsData.player.slow}` * 50
    },
    finalscore: `${questsData.player.total}`
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

const statsBlock = `<div class="stats">
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
</div>`;

// три функци заполняющие разметку под принятые данные

const questionsCreate = (src, num, height = '458', width = '468', cls = '') => {
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
      ${questionsCreate(answers[0].image.url, 1, answers[0].image.height, answers[0].image.width, answers[0].type, 'game__answer--wide')}
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

// в зависимости от типа вопроса погдрузка нужного шаблона
// заполнение его данными
// выгрузка полностью собранного экрана игры

var gameScreen = (typeOfQuestion, question) => {

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

var startGame = () => {

  if (questsData.questions[questsData.base.currentLevel]) {

    const node = gameScreen(
        questsData.questions[questsData.base.currentLevel].type,
        questsData.questions[questsData.base.currentLevel]
      );

    questsData.base.currentLevel++;
    return node;

  } else {
    return stats();
  }
};

var rules = () => {

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

var greeting = () => {

  const greeting = getElementFromTemplate(`<div class="greeting  central--blur">
      <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
      <h1 class="greeting__asterisk">*</h1>
      <div class="greeting__challenge">
        <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
        <p>Правила игры просты.<br> Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br> Задача кажется тривиальной, но не думай, что все так просто.<br> Фотореализм обманчив и коварен.<br> Помни, главное — смотреть очень внимательно.</p>
      </div>
      <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
    </div>`);

  const greetingContinue = greeting.querySelector('.greeting__continue');

  const handler = () => draw(rules());
  greetingContinue.addEventListener('click', handler);

  return greeting;
};

var intro = () => {

  const intro = getElementFromTemplate(`<div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup>Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
  `);

  const introAsterisk = intro.querySelector('.intro__asterisk');

  const handler = () => draw(greeting());
  introAsterisk.addEventListener('click', handler);

  return intro;
};

(() => {
  draw(intro());
})();

}());

//# sourceMappingURL=main.js.map
