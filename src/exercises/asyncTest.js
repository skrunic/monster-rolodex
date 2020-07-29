
const myPromise = new Promise((resolve, reject) => {
    if(true){
        setTimeout(() => {
            resolve("I have succeeded!")
        }, 3000);
    } else {
        reject("I have failed!");
    }
});

myPromise
.then(value => console.log(value))
.catch(rejectValue => console.log(rejectValue))
;