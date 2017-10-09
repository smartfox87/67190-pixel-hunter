import getElementFromTemplate from '../js/getElementFromTemplate';

import greeting from '../templates/greeting';
import draw from '../js/draw.js';

const intro = getElementFromTemplate(`<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p>
    </div>
`);

const intro__asterisk = intro.querySelector('.intro__asterisk');

const handler = (e) => draw(greeting);
intro__asterisk.addEventListener('click', handler);

export default intro;
