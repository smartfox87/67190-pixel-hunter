const setPoints = (answers, lives) => {
  let points = 0;
  if (answers.length < 10) {
    return -1;
  }

  // [fast, fast, justRight, wrong, wrong, ...]

  answers.forEach((item) => {
    if (item === `justRight`) {
      points += 100;
    }
    if (item === `fast`) {
      points += 150;
    }
    if (item === `slow`) {
      points += 50;
    }
    if (item === `wrong`) {
      lives--;
    }
  });
  if (lives <= 0) {
    return -1;
  }
  points += lives * 50;
  return points;

};

export default setPoints;
