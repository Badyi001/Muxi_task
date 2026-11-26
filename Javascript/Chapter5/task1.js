let arrays = [[1, 2, 3], [4, 5], [6]];
function flattenArrays(arrays) {
    let result = arrays.reduce((acc, cur) => acc.concat(cur), [])
    return result;
}
console.log(flattenArrays(arrays));