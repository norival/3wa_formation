function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

class Player {
    constructor(name, force, life) {
        this._name  = name;
        this._force = force;
        this._life  = life;
        this._shot  = 0;
    }

    hit(enemyForce) {
        // TODO random integer based on force
        const damage = getRandomInt(1, 10); 
        this._life -= damage;
        this._life = this._life < 0 ? 0 : this._life;
        this._shot++;

        return damage;
    }

    get life() {
        return this._life;
    }

    get force() {
        return this._force;
    }

    get name() {
        return this._name;
    }
}

class Knight extends Player {
    constructor(name) {
        super(name, 30, 80);
    }
}

class Dragon extends Player {
    constructor(name) {
        super(name, 45, 120);
    }
}

class Game {
    constructor(p1, p2) {
        this._p1   = p1;
        this._p2   = p2;
        this._turn = 0;
    }

    run() {
        while (this._p1.life > 0 && this._p2.life > 0) {
            // Game loop
            console.log(`Turn ${this._turn}: Battle! ***************************`);
            console.log(`
                ${this._p1.name} hit ${this._p2.name}!
                They inflict ${this._p1.hit(this._p2.force)} damage!
                ${this._p2.name} has ${this._p2.life} HP.
                `);

            console.log(`
                ${this._p2.name} hit ${this._p1.name}!
                They inflict ${this._p2.hit(this._p1.force)} damage!
                ${this._p1.name} has ${this._p1.life} HP.
                `);

            this._turn++;
        }

        console.log(`The battle is over *************************`);
        console.log(`${this._p1.life > 0 ? this._p1.name : this._p2.name} won!`);
    }
}

const game = new Game(new Knight('Bob'), new Dragon('Alice'));
game.run();
