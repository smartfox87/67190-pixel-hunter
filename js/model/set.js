import gameData from '../data/questsData';

export const setTime = (game, timer) => {

  if (timer > 30) {
    throw new RangeError('wtf');
  }

  let result = Object.assign({}, game);
  result.base.timer = timer;
  return result;
};

export const hasLevel = (currentLevel) =>
  typeof gameData.questions[`${currentLevel}`] !== 'undefined';

export const getLevel = (game, currentLevel) => {
  if (!hasLevel(currentLevel)) {
    throw new RangeError(`This game has no level ${currentLevel}`);
  }

  return game.questions[`${currentLevel}`];
};

export const setFinalResult = (game) => {
  if (game.base.lives > 0) {
    let result = Object.assign({}, game);
    result.player.result = 'Еееееее!';
    return result;
  } else {
    let result = Object.assign({}, game);
    result.player.result = 'Пфффф(((';
    return result;
  }
};

export const setLives = (game, lives) => {
  let result = Object.assign({}, game);
  result.base.lives = lives;
  return result;
};

export const setCurrentLevel = (game, currentLevel) => {
  let result = Object.assign({}, game);
  result.base.currentLevel = currentLevel;
  return result;
};

export const getPoints = (game) => {
  let result = Object.assign({}, game);
  result.player.total = result.player.answer * 100 + result.player.fast * 50 + result.base.lives * 50
  - result.player.slow * 50;
  return result;
};

export const checkRightAnswerSpeed = (data, time, answer) => {
  if (time < 10) {
    return setSlowAnswer(data);
  }
  if (time > 20) {
    return setFastAnswer(data);
  } else {
    return setCorrectAnswer(data);
  }
};

export const setAnswer = (game) => {
  let result = Object.assign({}, game);
  result.player.answer = result.player.answer + 1;
  return result;
};

export const setFastAnswer = (game) => {
  let result = Object.assign({}, game);
  result.player.fast = result.player.fast + 1;
  return result;
};

export const setSlowAnswer = (game, unknownAnswer) => {
  let result = Object.assign({}, game);
  result.player.slow = result.player.slow + 1;
  return result;
};

export const setUnknownAnswer = (game, unknownAnswer) => {
  let result = Object.assign({}, game);
  result.player.unknown = unknownAnswer;
  return result;
};

export const setWrongAnswer = (game, wrongAnswer) => {
  let result = Object.assign({}, game);
  result.player.wrong = wrongAnswer;
  return result;
};

export const setCorrectAnswer = (game) => {
  let result = Object.assign({}, game);
  result.player.correct = result.player.correct + 1;
  return result;
};

export const sliceAnswer = (game, answer) => {
  let copyCat = game.answer.slice(0, game.answer.length);
  copyCat.push(answer);

  let result = Object.assign({}, game);
  result.answer = copyCat;
  return result;
};
