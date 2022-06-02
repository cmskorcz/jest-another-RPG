const Potion = require('../lib/Potion');

class Enemy {

    constructor(name, weapon) {

        this.name = name;
        this.weapon = weapon;
        this.potion = new Potion();

        this.health = Math.floor(Math.random() * 10 + 85);
        this.strength = Math.floor(Math.random() * 5 + 5);
        this.agility = Math.floor(Math.random() * 5 + 5);

    }

    getHealth = function () {

        return `${this.name}'s health is now ${this.health}`

    }

    getAttackValue = function () {

        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);

    }

    isAlive = function () {

        if (this.health === 0) {
        
            return false
        
        } else {
        
            return true;
        
        }   
    }

    reduceHealth = function (attack) {

        this.health -= attack;

        if(this.health < 0) {

            this.health = 0;

        }
    }

    getDescription = function () {

        return `A ${this.name} holding a ${this.weapon} has appeared!`;

    }
}

module.exports = Enemy;