const promise = new Promise(( resolve, reject) => {
    setTimeout(() => {
        resolve('This function is resolved');
    },5000)
})

promise.then((data) => {
    console.log(data);
});
