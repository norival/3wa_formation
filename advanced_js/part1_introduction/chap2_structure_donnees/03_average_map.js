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
    average = notes.reduce((acc, val) => acc + val) / notes.length;

    return Math.floor(average * DECIMALS) / DECIMALS;
};

stMap.forEach(st => {
    if (st.notes.length === 0) {
        st.average = null

        return ;
    };

    st.average = mean(st.notes);

    if (st.average >= 17) {
        st.mention = 'TB'
        return ;
    };
    if (st.average >= 14 && st.average <= 16) {
        st.mention = 'B'
        return ;
    };
    if (st.average >= 12 && st.average <= 13) {
        st.mention = 'AB'
        return ;
    };
    if (st.average >= 10 && st.average <= 11) {
        st.mention = 'P'
        return ;
    };

    st.mention = '';
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

const addStudent = ( [key, infos], data) => {
    if (data.has(key)) throw new Error('Key already present');

    data.set(key, infos);
};

addStudent(goodStudent, stMap)
console.log(stMap);

// throw error
addStudent(badStudent, stMap)
console.log(stMap);
