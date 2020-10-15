const populations = [
  { id: 0, name: "Alan", jobs : ['dev junior', 'dev fullstack'], password : "tyeedsa00" },
  { id: 1, name: "Albert", jobs : [ 'doctor'], password : "tyeidii00" },
  { id: 2, name: "Jhon" , jobs : ['mathematician', 'doctor'], password : "xyuuuoi00"},
  { id: 3, name: "Brice", jobs : ['dev fullstack'] , password : "xytoiab00"},
  { id: 4, name: "Alexendra", jobs : ['dentist'],  password : "aaaoiab33" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl" , jobs : ['lead dev', 'dev fullstack']},
  { id: 7, name: "Dallas" , jobs : [ 'dev fullstack']},
  { id: 8, name: "Dennis", jobs : ['integrator', 'dev fullstack'] },
  { id: 9, name: "Edgar", jobs : ['mathematician'] },
  { id: 10, name: "Erika", jobs : ['computer scientist', 'mathematician'] },
  { id: 11, name: "Isaac", jobs : ['doctor'], password : "Axgkj22Kl" },
  { id: 12, name: "Ian", password : "Axgkj00Kl" },
  { id: 13, name: "Igor", password : "Axgkj00Kl" },
];


console.log('Question 1 ********************************************************************');
// Comptez tous les docteurs

const nDoctors = populations.filter(pop => (pop.jobs && pop.jobs.includes('doctor'))).length;
console.log(`Nombre de docteurs : ${nDoctors}`);


console.log('\nQuestion 2 ********************************************************************');
// Récupérez les noms des développeurs fullstack
const findByJob = (job, pops) => {
    return pops.filter(pop => (pop.jobs && pop.jobs.includes(job)));
};

const devFullstacks = findByJob('dev fullstack', populations).map(pop => pop.name);
console.log(`Les dev fullstack : ${devFullstacks.join(', ')}`);


console.log('\nQuestion 3 ********************************************************************');
// Récupérez les noms des personnes qui n'ont jamais travaillé
const foreverUnemployedGuys = populations.filter(pop => !pop.jobs).map(pop => pop.name);
console.log(`Les gens qui n'ont jamais travaillé : ${foreverUnemployedGuys.join(', ')}`);


console.log('\nQuestion 4 ********************************************************************');
// Etudiez les mots de passe des personnes et comptez les occurences des chacune
// des lettres distinctes dans les mots de passe

const passLens = populations.filter(pop => pop.password).map(pop => {
    return {
        name: pop.name,
        passLetters: new Set(pop.password).size
    };
});
console.log(passLens);


console.log('\nQuestion 5 ********************************************************************');
// a. Sélectionnez les personnes qui ont des mots de passe avec un nombre de
// lettre très différents, chaque mot de passe fait exactement 9 caractères.
//
// b. Puis, repérez les/le mot(s) de passe qui contiennent/contient un double
// 00.
//
// c. Y-a-t-il des mots de passe identique ? Si oui précisez le nom des
// personnes possédant ces mots de passe.
const PASS_LENGTH = 9;
const DECIMALS = 100;
const GOOD_PASS = 0.7;

const roundNumber = (number, decimals) => Math.floor(number * decimals) / decimals;

const passStat =
    passLens.map(pop => {
       return {name: pop.name, stat: roundNumber(pop.passLetters / PASS_LENGTH, DECIMALS)};
    });

const goodPass = passStat.filter(pass => pass.stat >= GOOD_PASS);
console.log('a. Personnes avec un mot de passe "fort" : ', goodPass);


const re = new RegExp('00', 'g');
const pass00 = populations
    .filter(pop => (pop.password && pop.password.match(re)))
    .map(pop => ({name: pop.name, password: pop.password}));
console.log('b. Personnes avec un mot de passe qui contient "00": ', pass00);


// create a Map with passwords as keys
const passStack = new Map();
populations.map(pop => {
    if (!pop.password) return ;

    if (!passStack.has(pop.password)) {
        passStack.set(pop.password, [pop.name])
        return ;
    }

    passStack.get(pop.password).push(pop.name);
});

console.log('c. Who has the same password?');
passStack.forEach((names, pass) => {
    if (names.length > 1) {
        console.log(`${names.join(' and ')} have the same password (${pass})`);
    }
})
