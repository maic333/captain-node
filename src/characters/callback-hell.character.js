const Character = require('./src/models/character');

// create hero character
module.exports = new Character(
  'Callback Hell',
  {
    healthRange: [60, 90],
    strengthRange: [60, 90],
    defenseRange: [40, 60],
    speedRange: [40, 60],
    luckRange: [25, 40]
  }
);