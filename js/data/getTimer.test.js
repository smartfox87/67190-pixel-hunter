import assert from 'assert';
import getTimer from './getTimer';

describe(`getTimer`, () => {
  it(`should return return less than one number`, () => {
    assert.equal(getTimer(1000).tick().value, 999);
    assert.equal(getTimer(111).tick().value, 110);
    assert.equal(getTimer(99).tick().value, 98);
    assert.equal(getTimer(40).tick().value, 39);
    assert.equal(getTimer(11).tick().value, 10);
    assert.equal(getTimer(6).tick().value, 5);
    assert.equal(getTimer(1).tick().value, 0);
  });
  it(`will not return the number too`, () => {
    assert.notEqual(getTimer(1000).tick().value, 1000);
    assert.notEqual(getTimer(111).tick().value, 111);
    assert.notEqual(getTimer(99).tick().value, 99);
    assert.notEqual(getTimer(40).tick().value, 40);
    assert.notEqual(getTimer(11).tick().value, 11);
    assert.notEqual(getTimer(6).tick().value, 6);
    assert.notEqual(getTimer(1).tick().value, 1);
  });
  it(`should return время вышло, when the value of seconds 0`, () => {
    assert.equal(getTimer(0).tick(), `время вышло`);
  });
  it(`invalid type`, () => {
    assert.throws(() => getTimer(`undefined`), Error);
    assert.throws(() => getTimer(null), Error);
    assert.throws(() => getTimer(``), Error);
    assert.throws(() => getTimer(-10), Error);
  });
});
