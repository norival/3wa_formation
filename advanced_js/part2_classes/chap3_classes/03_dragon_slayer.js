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


// Corrections Antoine
// class Player {
//     constructor({ force, life, name, shot }) {
//         this._force = force;
//         this._life = life;
//         this._name = name;
//         this._shot = shot;
//     }

//     set force(force) {
//         this._force = force;
//     }

//     set life(life) {
//         this._life = life;
//     }

//     set shot(shot) {
//         this._shot = shot;
//     }

//     get name() {

//         return this._name;
//     }

//     get force() {

//         return this._force;
//     }

//     get life() {

//         return this._life;
//     }

//     get shot() {

//         return this._shot;
//     }

//     hit() {

//         return this._force * Math.floor(Math.random() * 10) / 10;
//     }
// }

// class Dragon extends Player { }
// class Knight extends Player { }

// class Statistic {
//     constructor() {
//         this._data = new Map();
//         this._data.set('count', 0);
//     }

//     set data({ key, info }) {
//         this._data.set(key, info);
//     }

//     set count(count) {
//         this._data.set('count', count);
//     }

//     get count() {

//         return this._data.get('count');
//     }

//     get data() {
//         return this._data;
//     }

//     clear() {
//         this._data.clear();
//     }
// }

// class Game {
//     constructor({ dragon, knight }) {
//         this._player1 = dragon;
//         this._player2 = knight;

//         this._winner = null;

//         // statistiques 
//         this._statistic = new Statistic;
//         const { name: d } = this._player1;
//         const { name: k } = this._player2;

//         this._statistic.data = { key: d, info: [] };
//         this._statistic.data = { key: k, info: [] };
//     }

//     run() {

//         while (this._player1.life > 0 && this._player2.life > 0) {

//             if (Math.random() < .5) {
//                 const damages = Math.floor((this._player2.life - this._player1.hit()) * 100) / 100;

//                 this._player2.life = damages;
//                 this._player2.shot = this._player2.shot + 1;

//                 // statistic 
//                 const { name } = this._player2;
//                 const checkup = this._statistic.data.get(name);
//                 checkup.push({ damages: damages, shot: this._player2.shot });
//                 this._statistic.data = { key: name, info: checkup };

//             } else {
//                 const damages = Math.floor((this._player1.life - this._player2.hit()) * 100) / 100;

//                 this._player1.life = damages;
//                 this._player1.shot = this._player1.shot + 1;

//                 // statistic 
//                 const { name, shot } = this._player1;
//                 const checkup = this._statistic.data.get(name);
//                 checkup.push({ damages: damages, shot: shot });
//                 this._statistic.data = { key: name, info: checkup };
//             }

//             this._statistic.count = this._statistic.count + 1;
//         }
//     }

//     get winner() {

//         return this._player1.life > 0 ? this._player1.name : this._player2.name;
//     }

//     get statistic() {

//         return this._statistic;
//     }
// }

// // Source de vérité
// const initDragon = {
//     force: 0.5, life: 110, name: "Alan", shot: 0
// }
// const initKnight = {
//     force: 0.5, life: 120, name: "Michel", shot: 0
// }

// // On passe des valeurs en copie pour garder la source de vérité intacte
// let dragon = new Dragon({ ...initDragon });
// let knight = new Knight({ ...initKnight });

// let game = new Game({ dragon, knight });
// game.run();

// let name = game.winner;
// let count = 0;
// let count_michel = 0 ;
// const MAX_AROUND = 100;

// while (count < MAX_AROUND) {
//     dragon = new Dragon({ ...initDragon });
//     knight = new Knight({ ...initKnight });
//     game = new Game({ dragon, knight });

//     game.run();
//     name = game.winner;
//     name === 'Michel' ? count_michel++ : 0 ;
//     count++;
//     console.log(name, count, game._player1.life, game._player2.life);
// }

// console.log(`Statistiquement Michel gagne ${count_michel} fois sur ${MAX_AROUND}`);
