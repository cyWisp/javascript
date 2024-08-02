

const processMessage = (isMember) => {
    console.log('Starting processMessage');

    setTimeout(() => {}, 2000);

    return new Promise((resolve, reject) => {
       if (!isMember) {
           reject({
               name: 'Not a member.',
               message: 'Members only.'
           });
       } else {
           resolve({
               name: 'Welcome!',
               message: 'Welcome to the club!'
           });
       }
    });
}

const secondFunc = (isReal) => {
    console.log('Starting secondFunc');

    setTimeout(() => {}, 2000);

    return new Promise((resolve, reject) => {
        if (!isReal) {
            reject({
                name: 'not real',
                message: 'Needs to be real'
            })
        } else {
            resolve({
                name: 'Is real',
                message: 'Totall real'
            })
        }
    })
}


processMessage(false)
.then(response => console.log(response))
.catch(error => console.log(error));

secondFunc(true)
.then(response => console.log(response))
.catch(error => console.log(error));