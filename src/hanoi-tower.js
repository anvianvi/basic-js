const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsSpeedInSeconds = turnsSpeed / (60 * 60);
  let turnsNeeded = Math.floor(Math.pow(2, disksNumber)) - 1;
  let secondsNeeded = Math.floor(turnsNeeded / turnsSpeedInSeconds);

  return {
    turns: turnsNeeded,
    seconds: secondsNeeded,
  };
}

module.exports = {
  calculateHanoi
};
