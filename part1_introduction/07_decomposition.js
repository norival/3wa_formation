// Permutations ***************************************************************
let a = 1, b = 2, c = 4;

[a, b, c] = [b, c, a];

console.log(a, b, c);


// décomposition *************************************************************
let student = {
    name: "Alan",
    notes: [10, 16, 17],
    average: null,
};

// mean = notes => notes.reduce((sum, note) => note + sum) / notes.length;
// student.average = mean(student.notes);

student.average =
    Math.floor(student.notes.reduce((sum, note) => note + sum) / student.notes.length * 100) / 100;
const { name, notes, average } = student;

// constantes
console.log(name, notes, average);


// literate destructuring *****************************************************
const students = [
    {
        name: "Alan",
        family: {
            mother: "Isa",
            father: "Philippe",
            sister: "Sylvie",
        },
        age: 35,
    },
    {
        name: "Bernard",
        family: {
            mother: "Particia",
            father: "Cécile",
            sister: "Annie",
        },
        age: 55,
    },
];

for (const student of students) {
    const {
        name,
        family: { sister }
    } = student;

    console.log(name, sister);
}


// push value *****************************************************************
const strNumbers = [];
const str1 = ["one", "two"];
const str2 = ["three", "four"];

strNumbers.push(...str1, ...str2);
console.log(strNumbers);
