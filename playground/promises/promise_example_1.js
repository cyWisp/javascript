

const p = new Promise((resolve, reject) => {
    let isTrue = true;
    if (isTrue) {
        resolve('Promise resolved');
    } else {
        reject('Promise rejected');
    }
});

p
.then(message => console.log(`Promise resolved: ${message}`))
.catch(message => console.log(`Promise rejected: ${message}`));