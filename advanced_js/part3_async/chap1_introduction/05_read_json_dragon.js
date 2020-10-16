const fs = require('fs');

// fs.readFile('./data/dragons.json', { encoding: 'utf8' }, (err, data) => {
//     // impossible de lire le fichier
//     if (err) {
//         console.log("File read failed:", err);
//         return;
//     }
//     // success
//     // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
//     // console.log('File data:', JSON.parse(data)) 
//     // console.log(JSON.parse(data).dragons) 
// })

const p = path => {
    return new Promise((resolv, error) => {
        fs.readFile(path, {encoding: 'utf8'}, (err, data) => {
            if (err) {
                error('the file does not exists');
                return ;
            }

            const { dragons } = JSON.parse(data);
            resolv(dragons);
        });
    });
}

p('./data/dragons.json')
    // .then(dragons => console.log(dragons));
    .then(d => {
        const max = d.reduce((acc, dragon) => {
            if (dragon.age > acc.age) return dragon;

            return acc;
        }, { age: 0 });

        console.log(max);
    });
