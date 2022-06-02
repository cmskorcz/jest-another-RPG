const Player = require('./Player');
const Enemy = require('./Enemy');
const inquirer = require('inquirer');

class Game {

    constructor () {

        this.roundNumber = 0;
        this.isPlayerTurn = false;
        this.enemies = [];
        this.currentEnemy;
        this.player;

    }

    initializeGame = function () {

        this.enemies.push(new Enemy('goblin', 'sword'));
        this.enemies.push(new Enemy('orc', 'baseball bat'));
        this.enemies.push(new Enemy('skeleton', 'axe'));

        this.currentEnemy = this.enemies[0];

        inquirer
            .prompt({

                type: 'text',
                name: 'name',
                message: 'What is your name?'

            })
            .then(({ name }) => {

                this.player = new Player(name)

                this.startNewBattle();
            })

    }

    startNewBattle = function () {

        if (this.player.agility > this.currentEnemy.agility) {

            this.isPlayerTurn = true;

        } else {

            this.isPlayerTurn = false;

        };

        console.log('Your stats are as follows:');
        console.table(this.player.getStats());

        console.log(this.currentEnemy.getDescription());

        this.battle();

    }

}

module.exports = Game