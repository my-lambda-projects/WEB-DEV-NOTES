function binarySearch (list, target) {
  if (list.length === 0) return false
  const slicePoint = Math.floor(list.length / 2)
  const leftHalf = list.slice(0, slicePoint)
  const rightHalf = list.length > 1 ? list.slice(slicePoint) : []

  if (target < list[slicePoint]) {
    return binarySearch(leftHalf, target)
  } else if (target > list[slicePoint]) {
    return binarySearch(rightHalf, target)
  } else {
    return true
  }
}

function binarySearchIndex (list, target, low = 0, high = list.length - 1) {
  if (low > high) {
    return -1
  }
  const slicePoint = Math.floor((low + high) / 2)

  if (target < list[slicePoint]) {
    return binarySearchIndex(list, target, low, slicePoint - 1)
  } else if (target > list[slicePoint]) {
    return binarySearchIndex(list, target, slicePoint + 1, high)
  } else {
    return slicePoint
  }
}

module.exports = {
  binarySearch,
  binarySearchIndex
}
