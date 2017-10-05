const getElementFromTemplate = (content, containerType = 'div') => {
  let node = document.createElement(containerType);
  node.innerHTML = content;
  return node.cloneNode(true);
};

export default getElementFromTemplate;
