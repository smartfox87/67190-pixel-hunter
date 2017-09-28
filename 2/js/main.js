(() => {

  const checkKeyDown = (evt) => {
    if (evt.altKey === true && evt.keyCode === 37 && current !== 0) {
      select(current - 1);
    }
    if (evt.altKey === true && evt.keyCode === 39 && current < slides.length - 1) {
      select(current + 1);
    }
  };

  document.addEventListener(`keydown`, checkKeyDown);

  let mainElement = document.getElementsByClassName(`central`);

  let loadTemplate = (templateName) => {
    let node = document.createElement(`span`);
    let template = document.getElementById(templateName);
    let content = template.content ? template.content : template;
    node.appendChild(content);
    return node.cloneNode(true);
  };

  let slides = [
    loadTemplate(`greeting`),
    loadTemplate(`rules`),
    loadTemplate(`game-1`),
    loadTemplate(`game-2`),
    loadTemplate(`game-3`),
    loadTemplate(`stats`)
  ];

  let current = 0;

  debugger;

  let select = (index) => {
    current = index;
    mainElement.innerHTML = ``;
    mainElement.appendChild(slides[index]);
  };

  select(0);

})();
