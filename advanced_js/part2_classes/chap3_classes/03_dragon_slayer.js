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
        this._life -= getRandomInt(1, 10);
    }

    get life() {
        return this._life;
    }

    get force() {
        return this._force;
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
            this._p1.hit(this._p2.force);
            this._p2.hit(this._p1.force);

            this._turn++;
        }
    }
}

const game = new Game(new Knight('Bob'), new Dragon('Alice'));
game.run();
