const sharedElements = (arr1, arr2, arr3) => {
  let result = []

  // loop through the first array
  for(let i of arr1) {

    // check if elements in the first array are present in both second & third array
    if(arr2.includes(i) && arr3.includes(i)){

      // If true, then push elements into the result array
      result.push(i)
    }
  }

  return result
}

console.log(sharedElements([1, 2, 3, 4], [3, 4, 5], [3, 4, 5, 6]))