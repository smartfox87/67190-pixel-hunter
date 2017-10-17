import assert from 'assert';
import questsData from './questsData';
import setPoints from './setPoints';

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe(`setPoints`, () => {
  describe(`Returns`, () => {
    it(`short Array = fail`, () => {
      assert.equal(setPoints([`fast`, `fast`, `fast`], questsData.base.lives), -1);
      assert.equal(setPoints([`fast`, `fast`, `fast`, `justRight`, `justRight`, `justRight`], questsData.base.lives), -1);
      assert.equal(setPoints([`justRight`, `fast`, `slow`, `wrong`], questsData.base.lives), -1);
      assert.equal(setPoints([`wrong`, `wrong`, `fast`, `slow`], questsData.base.lives), -1);
    });
  });

  describe(`Setting`, () => {
    it(`zero lives = fail`, () => {
      assert.equal(setPoints([`wrong`, `wrong`, `wrong`], questsData.base.lives), -1);
      assert.equal(setPoints([`wrong`, `wrong`, `wrong`, `fast`, `slow`], questsData.base.lives), -1);
      assert.equal(setPoints([`justRight`, `fast`, `slow`, `fast`, `slow`, `wrong`, `wrong`, `slow`, `fast`, `wrong`], questsData.base.lives), -1);
      assert.equal(setPoints([`slow`, `fast`, `slow`, `justRight`, `fast`, `wrong`, `wrong`, `fast`, `slow`, `wrong`], questsData.base.lives), -1);
    });
  });

  describe(`Failures`, () => {
    it(`all justRight = 1150`, () => {
      assert.equal(setPoints([`justRight`, `justRight`, `justRight`, `justRight`, `justRight`, `justRight`, `justRight`, `justRight`, `justRight`, `justRight`], questsData.base.lives), 1150);
    });
  });
});
