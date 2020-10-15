const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s4",
            {
                "name": "Naoudi",
                "mention": "",
                "notes": [14.5, 19, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/3"
            }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ],
        [
            "s6",
            {
                "name": "Shere Khan",
                "mention": "",
                "notes": [],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
    ];


console.log('Question 1 *********************************************************************');

const DECIMALS = 100;

const stMap = new Map(DataStudents);

const mean = notes => {
    return Math.floor(notes.reduce((acc, val) => acc + val) / notes.length * DECIMALS) / DECIMALS;
};

const getMention = average => {
    if (average >= 17) {
        return 'TB';
    };
    if (average >= 14 && average <= 16) {
        return 'B';
    };
    if (average >= 12 && average <= 13) {
        return 'AB';
    };
    if (average >= 10 && average <= 11) {
        return 'P';
    };

    return '';
};

stMap.forEach(st => {
    if (st.notes.length === 0) {
        st.average = null

        return ;
    };

    st.average = mean(st.notes);
    st.mention = getMention(st.average);
});

console.log(stMap);


console.log('Question 2 *********************************************************************');

const goodStudent =
    [
        "s7",
        {
            "name": "Bob",
            "mention": "",
            "notes": [14, 11, 12],
            "average" : null,
            "url": "http://lorempixel.com/100/100/cats/3"
        }
    ];

const badStudent =
    [
        "s3",
        {
            "name": "DevilJoe",
            "mention": "",
            "notes": [6, 6, 6],
            "average" : null,
            "url": "http://lorempixel.com/100/100/cats/6"
        }
    ];

const addStudent = ([key, infos], data) => {
    if (data.has(key)) throw new Error('Key already present');

    data.set(key, infos);
};

addStudent(goodStudent, stMap)
// console.log(stMap);

// throw error
// addStudent(badStudent, stMap)
// console.log(stMap);
