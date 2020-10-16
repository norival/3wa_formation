const login = (email, password, callback ) => {
    setTimeout(() => {
        callback(email);
    }, 1000);
}

const myCallback = data => {
    const email = data;
    console.log(email);
};

login('alan@alan.fr', 1234567890, myCallback);
