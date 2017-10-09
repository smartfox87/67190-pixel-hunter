const draw = (page) => {
  let mainElement = document.querySelector('#main');

  mainElement.innerHTML = '';
  mainElement.appendChild(page);
};

export default draw;
