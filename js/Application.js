import draw from './utils/draw.js';

import intro from './view/intro';
import greeting from './view/greeting';
import rules from './view/rules';
import stats from './view/stats';

import gamePresenter from './GamePresenter';

export default class Application {

  static showWelcome() {
    draw(intro());
  }

  static showGreeting() {
    draw(greeting());
  }

  static showRules() {
    draw(rules());
  }

  static showGame() {
    gamePresenter();
  }

  static showStats(data) {
    draw(stats(data));
  }

}
