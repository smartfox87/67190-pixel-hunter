import getElementFromTemplate from '../getElementFromTemplate';

import greeting from './greeting';
import draw from '../draw.js';

export default () => {

  const intro = getElementFromTemplate(`<div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup>Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
  `);

  const introAsterisk = intro.querySelector('.intro__asterisk');

  const handler = (e) => draw(greeting());
  introAsterisk.addEventListener('click', handler);

  return intro;
};
