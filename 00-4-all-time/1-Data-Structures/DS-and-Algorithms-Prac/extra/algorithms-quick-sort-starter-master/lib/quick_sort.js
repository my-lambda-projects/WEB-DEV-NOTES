function quickSort (array) {
  if (array.length <= 1) return array

  const pivot = array[0]
  array.shift()

  const leftSide = array.filter(num => num <= pivot)
  const rightSide = array.filter(num => num > pivot)

  const leftSorted = quickSort(leftSide)
  const rightSorted = quickSort(rightSide)

  leftSorted.push(pivot)
  return leftSorted.concat(rightSorted)
}

module.exports = {
  quickSort
}
