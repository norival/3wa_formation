const populations = [
    { id: 0, name: "Alan" },
    { id: 1, name: "Albert" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Brice" },
    { id: 4, name: "Alexendra" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Dallas" },
    { id: 8, name: "Dennis" },
    { id: 9, name: "Edgar" },
    { id: 10, name: "Erika" },
    { id: 11, name: "Isaac" },
    { id: 12, name: "Ian" },
];


// Quesiton 1 ******************************************************************
console.log('Quesiton 1 ******************************************************************');
populations.sort((a, b) => { return a.name.length - b.name.length; });
console.log(populations);


// Quesiton 2 ******************************************************************
console.log('Quesiton 2 ******************************************************************');
populations.forEach(guy => guy.lenName = guy.name.length);
console.log(populations);


// Quesiton 3 ******************************************************************
console.log('Quesiton 3 ******************************************************************');
lens = new Set(populations.map(guy => guy.lenName));
const groupNames = [];
for (const len of lens) {
    groupNames.push(populations.filter(guy => guy.lenName === len));
}
console.log(groupNames);


// // Corrections Antoine *********************************************************
// // Ordonner les valeurs de population en fonction de la longueur des noms par ordre croissant 
// populations.sort((a, b) => a.name.length - b.name.length);
// // l'ordre est modifié sur le tableau 
// console.log(populations);

// // Ajoutez une clé lenNames elle permettra d'assigner la longueur de chaque nom.
// for(const population of populations){
//     // le && est passif si la première évaluation est false JS n'évalue pas la deuxième
//     // le code ci-dessous conduira donc à assigner la longueur du nom ou null pour la clé lenName
//     population['lenName'] = ( population.name && population.name.length || null  ) ;
// }

// // dans la fonction callback on a respectivement l'item population du tableau et un compteur i 
// // populations.map( (population, i) => {
// //     population['lenName'] = population.name.length  ;
// // })

// console.log(populations);

// // On récupère l'ensemble des longueurs possibles
// const lenNames = new Set(populations.map(pop => pop.lenName));
// console.log(lenNames);
// const groupNames = [];
// for (const lenName of lenNames) {
//     groupNames.push(populations.filter(p => p.lenName === lenName));
// }
// console.log(groupNames);

// // Une autre solution en partant de la longueur des noms :

// // Attention lenNames est un ensemble pour appliquer map vous devez spreader le set pour
// // obtenir un tableau
// const groupNames_v2 = [ ...lenNames ].map( len => populations.filter(p => p.lenName === len) );


// const groupBy = (data, k) => data.reduce( (acc, curr) => (  ( curr.lenName === k && [curr] || [] ).concat(acc) ), [] );
// const groupNames_v3 = [ ...lenNames ].map( len => groupBy(populations, len) );


// Quesiton 4 ******************************************************************
console.log('Quesiton 4 ******************************************************************');

const relations = [
    { id : 0 , relation : [1, 2, 4]},
    { id : 3 , relation : [7, 8]},
    { id : 4 , relation : [2, 7, 8, 11]},
    { id : 5 , relation : [1, 2, 4]},
    { id : 7 , relation : [2, 3, 5, 9]},
    { id : 9 , relation : [1, 2, 4, 8, 11]},
    { id : 11 , relation : [1, 2, 9, 10,]},
];

const populations2 = [];

relations.forEach(relation => {
    relPop = [];
    relation.relation.forEach(rel => {
        relPop.push(populations.filter(pop => pop.id === rel)[0].name);
    })
    pop = populations.filter(pop => pop.id === relation.id);
    pop[0].relations = relPop;
    populations2.push(pop[0]);
});
console.log(populations2);
