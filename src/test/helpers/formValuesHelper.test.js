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
  
    it('Every character object must be an object with 3 fields: id, nameToDisplay, status', () => {
      const { alive, dead } = values.vitalStatus;
      
      [alive, dead].forEach((s) => {
        formattedResult[s].forEach((characterObject) => {
          assert.equal(Object.keys(characterObject).length, 3);
          assert.ok(characterObject.id);
          assert.ok(characterObject.nameToDisplay);
          assert.ok(characterObject.status);
        });
      })
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
      console.log(currentScore);
    } 
    catch(err) {
      console.log(err);
    }
    it('getCurrentScore function must return an object number', () => {
      assert.ok(typeof currentScore === 'object' && currentScore !== null)
    });

    it('getCurrentScore function cssWidth must be an number between 0 and 100', () => {
      assert.ok(Number.isSafeInteger(currentScore.cssWidth));
      assert.ok(0 <= currentScore.cssWidth && currentScore.cssWidth <= 100);
    });

    it('getCurrentScore function cssWidth must be an number between 0 and 100', () => {
      assert.ok(Number.isSafeInteger(currentScore.score));
      assert.ok(0 <= currentScore.score && currentScore.score <= dbCharacters.length);
    });
    it('with given mock, cssWidth must return 37', () => {
      assert.equal(currentScore.cssWidth, 37);
    });
    it('with given mock, score must return 10', () => {
      assert.equal(currentScore.score, 10);
    });
  })
});
