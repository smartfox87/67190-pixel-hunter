const getTimer = (seconds) => {
  if (typeof seconds !== `number` || seconds < 0) {
    throw new Error(`неверный тип данных`);
  }
  return {
    value: seconds,
    tick() {
      if (this.value <= 0) {
        return `время вышло`;
      }
      return getTimer(this.value - 1);
    }
  };
};

export default getTimer;
