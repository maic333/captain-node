const RandomizationService = require('../services/randomization-service');
const SkillType = require('../typings/skill-type');

module.exports = class ResilienceSkill {

  constructor() {
    // chance to use the skill (number between 0 and 100)
    this.chance = 20;
    // type of skill (attacking or defensive)
    this.type = SkillType.DEFENSE;
    // flag set to true if the skill was used last turn
    this.usedLastTurn = false;
  }

  /**
   * Use skill
   * @param {Character} character
   * @param {number} damage
   * @returns {number} the damage caused by the attacker
   */
  use(character, damage) {
    // check the chance of using the skill
    if (!RandomizationService.isLucky(this.chance)) {
      // unlucky; skill not used
      this.usedLastTurn = false;

      // damage not affected by the skill
      return damage;
    }

    // check if the skill was used last turn
    if (this.usedLastTurn) {
      // the skill cannot be used 2 turns in a row;
      this.usedLastTurn = false;

      // damage is not affected
      return damage;
    }

    // take half of the damage
    damage = damage / 2;

    // the skill has been used
    this.usedLastTurn = true;

    return damage;
  }

};
