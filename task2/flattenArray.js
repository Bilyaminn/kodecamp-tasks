const flattenArray = arr => {
  let result = []

  // loop through the outer array
  for(let item of arr) {

    // loop through each inner array
    for(let num of item) {

      // add each number into the empty array created (result)
      result.push(num)
      }
    }

    return result
}

console.log(flattenArray([[1, 2, 3], [4, 5], [6, 7, 8, 9]]))