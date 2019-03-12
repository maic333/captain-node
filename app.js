'use strict';

const Battle = require('./src/models/battle');

// get the hero
const hero = require('./src/characters/hero.character');
// get the enemy
const enemy = require('./src/characters/callback-hell.character');

// create new battle
new Battle(hero, enemy);
