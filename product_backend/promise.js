const eventPromise = (number) => {
    return new Promise((success, fail) => {
        if (number % 2 === 0) {
            success(`${number} is an even number`)
            return
        }
        fail(`${number} is an odd number`)
    })
}


eventPromise(5).then(val => {
    console.log(val)
}).catch(val => {
    console.log(val)
})

eventPromise(2).then(val => {
    console.log(val)
}).catch(val => {
    console.log(val)
})

eventPromise(1).then(val => {
    console.log(val)
}).catch(val => {
    console.log(val)
})