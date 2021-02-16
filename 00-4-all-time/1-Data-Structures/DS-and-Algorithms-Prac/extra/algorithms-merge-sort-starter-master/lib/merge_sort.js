function merge (array1, array2) {
  const result = []
  if (array1.length === 0 && array2.length > 0) {

  }
  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] < array2[0]) {
      result.push(array1[0])
      array1.shift()
    } else {
      result.push(array2[0])
      array2.shift()
    }
  }

  if (array1.length > 0) {
    result.push(...array1)
  } else if (array2.length > 0) {
    result.push(...array2)
  }

  return result
}

function mergeSort (array) {
  if (array.length <= 1) return array

  const midpoint = Math.floor(array.length / 2)

  const leftSide = mergeSort(array.slice(0, midpoint))
  const rightSide = mergeSort(array.slice(midpoint))

  return merge(leftSide, rightSide)
}

module.exports = {
  merge,
  mergeSort
}
