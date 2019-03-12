const RandomizationService = require('../services/randomization-service');

module.exports = class Battle {

  /**
   * Define a new 1v1 battle
   * @param {Character} c1 first character
   * @param {Character} c2 second character
   * @param {number} maxTurns maximum number of turns before deciding who is the winner
   */
  constructor(c1, c2, maxTurns = 20) {
    // the two fighters
    this.c1 = c1;
    this.c2 = c2;

    // maximum number of turns
    this.maxTurns = maxTurns;
    // number of turns passed
    this.turns = 0;

    // initialize the fight
    this.initialize();

    // start the fight
    this.fight();
  }

  /**
   * Prepare the two characters before fighting
   */
  initialize() {
    // prepare characters for fighting
    this.c1.prepareForFight();
    this.c2.prepareForFight();

    // show characters stats
    console.log('Players are ready to fight!');
    this.c1.printStats();
    this.c2.printStats();

    // who starts the fight?
    if (
      // character 1 is faster?
      this.c1.speed > this.c2.speed ||
      (
        // same speed...
        this.c1.speed === this.c2.speed &&
        // ...but character 1 is luckier
        this.c1.luck > this.c2.luck
      )
    ) {
      // character 1 starts the fight
      this.attacker = this.c1;
      this.defender = this.c2;
    } else {
      // character 2 starts the fight
      this.attacker = this.c2;
      this.defender = this.c1;
    }
  }

  /**
   * Start fighting
   */
  fight() {
    console.log('\r\nStart fight!');

    while(
      // did not reach the maximum number of turns
      this.turns < this.maxTurns &&
      // character 1 is not dead
      this.c1.health > 0 &&
      // character 2 is not dead
      this.c2.health > 0
    ) {
      // new round
      console.log('---');

      // attack
      const damage = this.attacker.attack(this.defender);
      // defend
      this.defender.defend(damage);

      // prepare for the next turn
      this.turns++;

      // switch roles
      const exAttacker = this.attacker;
      this.attacker = this.defender;
      this.defender = exAttacker;
    }

    // fight finished; who won?
    let winner;
    if (this.c1.health > this.c2.health) {
      // character 1 wins
      console.log(`${this.c1.name} wins!`);
    } else if (this.c1.health < this.c2.health) {
      // character 2 wins
      console.log(`${this.c2.name} wins!`);
    } else {
      // draw
      console.log(`It's a draw!`);
    }

    // print characters stats
    this.c1.printStats();
    this.c2.printStats();
  }

};
