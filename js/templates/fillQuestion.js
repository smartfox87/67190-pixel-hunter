// три функци заполняющие разметку под принятые данные

const questionsCreate = (src, num, cls = '', size = 'width="468" height="458"') => {
  let questionsMarkDown = (`<div class="game__option">
    <img src="${src}" alt="Option ${num}" ${size}>
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

const fillQuestion_Each = (question) => {

  let {question: task, answers: answers} = question;

  let markDown = (`<p class="game__task">${task}</p>

    <form class="game__content">
      ${questionsCreate(answers[0].image.url, 1, answers[0].image.height, answers[0].image.width, answers[0].type)}
      ${questionsCreate(answers[1].image.url, 2, answers[1].image.height, answers[1].image.width, answers[1].type)}
    </form>
  `);

  return markDown;
};

const fillQuestion_drawOrPhoto = (question) => {

  let {question: task, answers: answers} = question;

  let markDown = (`<p class="game__task">${task}</p>

  <form class="game__content  game__content--wide">
    <div class="game__option">
      ${questionsCreate(answers[0].image.url, 1, answers[0].image.width, answers[0].image.height, answers[0].type, 'game__answer--wide')}
    </div>
  </form>
  `);

  return markDown;
};

const fillQuestion_findOne = (question) => {

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

export {fillQuestion_Each, fillQuestion_drawOrPhoto, fillQuestion_findOne};
