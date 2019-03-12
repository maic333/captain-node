const Character = require('../models/character');
const CriticalStrikeSkill = require('../models/critical-strike.skill');
const ResilienceSkill = require('../models/resilience.skill');

// create hero character
module.exports = new Character(
  'Captain Node',
  {
    healthRange: [70, 100],
    strengthRange: [70, 80],
    defenseRange: [45, 55],
    speedRange: [40, 50],
    luckRange: [10, 30]
  },
  [
    CriticalStrikeSkill,
    ResilienceSkill
  ]
);