const Enemy = require('../lib/Enemy');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

describe('Enemy', () => {

    it('should build enemy object', () => {

        const enemy = new Enemy('goblin', 'sword');

        expect(enemy.name).toBe('goblin');
        expect(enemy.weapon).toBe('sword');
        expect(enemy.health).toEqual(expect.any(Number));
        expect(enemy.strength).toEqual(expect.any(Number));
        expect(enemy.agility).toEqual(expect.any(Number));
        expect(enemy.potion).toEqual(expect.any(Object));

    })

    it(`should get enemy's helath value`, () => {

        const enemy = new Enemy('goblin', 'sword');

        expect(enemy.getHealth()).toEqual(
            expect.stringContaining(enemy.health.toString()));

    })

    it('should check if enemy is alive or not', () => {

        const enemy = new Enemy('goblin', 'sword');

        expect(enemy.isAlive()).toBe(true);

        enemy.health = 0;

        expect(enemy.isAlive()).toBe(false);

    })

    it('should check enemy attack value', () => {

        const enemy = new Enemy('goblin', 'sword');
        
        enemy.strength = 10

        expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
        expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);

    })

    it('should reduce enemy health by attack value', () => {

        const enemy = new Enemy('goblin', 'sword');
        const oldHealth = enemy.health;

        enemy.reduceHealth(5);

        expect(enemy.health).toBe(oldHealth - 5);

        enemy.reduceHealth(9999);

        expect(enemy.health).toBe(0);

    })

    it('should get a description of the enemy', () => {

        const enemy = new Enemy('goblin', 'sword');

        expect(enemy.getDescription()).toEqual(
            expect.stringContaining('goblin'));

        expect(enemy.getDescription()).toEqual(
            expect.stringContaining('sword'));
            
    })
})