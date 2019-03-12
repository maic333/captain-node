module.exports = class RandomizationService {
  /**
   * Generate a random integer value between given min and max values
   * @param range array with 2 values: [min, max]
   */
  static getRandomInRange(range) {
    if (
      !Array.isArray(range) ||
      range.length !== 2
    ) {
      throw 'RandomizationService.getRandomInRange: \'range\' argument is not an array of [min, max]';
    }

    // get min and max values from range
    const min = range[0];
    const max = range[1];

    // increment the max value because Math.random() returns a float value between [0, 1) - the maximum is exclusive
    const maxExclusive = max + 1;

    return Math.floor(Math.random() * (maxExclusive - min)) + min;
  }

  /**
   * Check the luck of an action, based a given chance
   * @param {number} chance number between 0 and 100
   * @returns {boolean} true if lucky, otherwise false
   */
  static isLucky(chance) {
    // generate a random number within the range of the 'chance' value (between 0 and 100)
    const randomNo = RandomizationService.getRandomInRange([0, 100]);

    // if the generated number is smaller than the 'luck' value, then the character is lucky
    return (randomNo <= chance);
  }
};