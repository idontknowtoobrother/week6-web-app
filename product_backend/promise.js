const eventPromise = (number) => {
    return new Promise((success, fail) => {
        if (number % 2 === 0) {
            success(`${number} is an even number`)
            return
        }
        fail(`${number} is an odd number`)
    })
}


const promisList = []
promisList.push(eventPromise(5))
promisList.push(eventPromise(2))
promisList.push(eventPromise(1))
promisList.push(eventPromise(15))


promisList.forEach(proms => {
    proms.then(val => {
        console.log(val)
    }).catch(err => {
        console.log(err)
    })
})