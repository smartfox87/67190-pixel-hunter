import questsData from '../data/questsData.js';

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

export {smallHeader, fullHeader};
