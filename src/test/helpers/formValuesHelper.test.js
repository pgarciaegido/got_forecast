const assert = require('assert');

const dbCharacters = require('../../../db/characters.json');
const mocks = require('./mocks');

const { formatResults, getCurrentScore, values } = require('../../helpers/formValuesHelper');

describe('formValuesHelper', () => {
  it('Result mocks and Database characters file should exist', () => {
    assert.ok(mocks.rawResult);
    assert.ok(mocks.formattedResult);
    assert.ok(dbCharacters);
  });

  describe('values object', () => {
    it('values object must have a vitalStatus field', () => {
      assert.ok(values.vitalStatus);
    })

    it('values.vitalStatus must have both alive and dead fields', () => {
      assert.ok(values.vitalStatus.alive);
      assert.ok(values.vitalStatus.dead);
    });
  });

  describe('formatResults function', () => {
    let formattedResult;
    try {
      formattedResult = formatResults({
        allCharacters: dbCharacters,
        results: mocks.rawResult
      });
    } 
    catch(err) {
      console.log(err);
    }
    it('formatResults function must return an object with two fields', () => {
      assert.equal(Object.keys(formattedResult).length, 2);
    });
  
    it('formatResults function must return an object with two fields and those fields should match with registered values', () => {
      assert.ok(formattedResult[values.vitalStatus.alive]);
      assert.ok(formattedResult[values.vitalStatus.dead]);
    });

    it('formatResults result must be deep equal with mock formatted result', () => {
      assert.deepStrictEqual(formattedResult, mocks.formattedResult);
    });
  });
  describe('getCurrentScore function', () => {
    let currentScore;
    try {
      currentScore = getCurrentScore({
        allCharacters: dbCharacters,
        results: mocks.rawResult
      });
    } 
    catch(err) {
      console.log(err);
    }
    it('getCurrentScore function must return a number', () => {
      assert.ok(Number.isSafeInteger(currentScore));
    });
    it('getCurrentScore function must return a number between 0 and 100', () => {
      assert.ok(0 <= currentScore && currentScore <= 100);
    });
    it('with given mock, it must return 37', () => {
      assert.equal(currentScore, 37);
    });
  })
});
