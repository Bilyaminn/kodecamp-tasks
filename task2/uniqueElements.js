const uniqueElements = arr => {
    let result = []

    for(let i of arr) {
        if(!result.includes(i)) {
            result.push(i)
        }
    }

    return result
}

console.log(uniqueElements([1, 3, 2, 3, 4, 5, 4, 2, 5, 6]))