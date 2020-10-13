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


// question 1
populations.sort((a, b) => { return a.name.length - b.name.length; });
console.log(populations);


// question 2
populations.forEach(guy => guy.lenName = guy.name.length);
console.log(populations);


// question 3
lens = new Set(populations.map(guy => guy.lenName));
const groupNames = [];
for (const len of lens) {
    groupNames.push(populations.filter(guy => guy.lenName === len));
}
console.log(groupNames);
