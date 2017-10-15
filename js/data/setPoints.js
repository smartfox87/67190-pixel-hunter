const setPoints = (answers, lives) => {
  let points = 0;
  if (answers.length < 10) {
    return -1;
  }

  // [fast, fast, justRight, wrong, wrong, ...]

  answers.forEach((item) => {
    if (`justRight`) {
      counts += 100;
    }
    if (`fast` && `justRight`) {
      counts += 50;
    }
    if (`slow` && `justRight`) {
      counts -= 50;
    }
    if (`wrong`) {
      lives--;
    }
  });
  if (lives <= 0) {
    return -1;
  }
  counts += lives * 50;
  return points;

};

export default setPoints;
