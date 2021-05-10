function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            let randomNum = Math.floor(Math.random() * 11);
            if (randomNum > 5){
                resolve(randomNum);
            } else {
                reject();
            }
        }, 50);
    });
}

async function printRandomNumber() {
    try {
        let promise = await getRandomNumber();
        console.log(promise);
    } catch(err) {
        alert(err);
    }
}

printRandomNumber();