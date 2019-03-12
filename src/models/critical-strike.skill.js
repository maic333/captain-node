const RandomizationService = require('../services/randomization-service');
const SkillType = require('../typings/skill-type');

module.exports = class CriticalStrikeSkill {

  constructor() {
    // chance to use the skill (number between 0 and 100)
    this.chance = 10;
    // type of skill (attacking or defensive)
    this.type = SkillType.ATTACK;
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
      // unlucky; damage not affected by the skill
      return damage;
    }

    // if super lucky (1% chance), it strikes 3 times
    if (RandomizationService.isLucky(1)) {
      // strike 3 times
      return damage * 3;
    } else {
      // strike 2 times
      return damage * 2;
    }
  }

};
