import questsData from '../data/questsData';
import {setTime,
        setLives,
        setCurrentLevel,
        setFinalResult,
        getPoints,
        setAnswer,
        setSlowAnswer,
        setUnknownAnswer,
        setWrongAnswer,
        setFastAnswer,
        setCorrectAnswer,
        sliceAnswer
} from './set';

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

  addAnswer(time, answer) {
    if (time < 10) {
      this._state = sliceAnswer(this._state, 'slow');
      this._state = setSlowAnswer(this._state, this._state.player.slow + 1);
    }
    if (time > 20) {
      this._state = sliceAnswer(this._state, 'fast');
      this._state = setFastAnswer(this._state, this._state.player.fast + 1);
    }
    if (time > 10 && time < 20) {
      this._state = sliceAnswer(this._state, 'correct');
      this._state = setCorrectAnswer(this._state, this._state.player.correct + 1);
    }
    this._state = setAnswer(this._state);
  }

  addUnknownAnswer() {
    this._state = setUnknownAnswer(this._state, this._state.player.unknown + 1);
    this._state = sliceAnswer(this._state, 'unknown');
  }

  addWrongAnswer() {
    this._state = setWrongAnswer(this._state, this._state.player.wrong + 1);
    this._state = sliceAnswer(this._state, 'wrong');
  }

  end() {
    this._state = getPoints(this._state);
    this._state = setFinalResult(this._state);
  }
}

export default new Model();
