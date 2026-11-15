function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; 1; i--) {
        if (array[i] === undefined) {
            break;
        }
        list = {
            value: array[i], rest: list
        }
    }
    return list;
}
function listToArray(list) {
    let array = []
    let i = 0;
    while (list !== null) {
        array[i] = list.value;
        list = list.rest;
        i++;
    }
    return array;
}
function prepend(arrayNumber, list) {
    list = {
        value: arrayNumber, rest: list
    }
    return list;
}
function nth1(list, number) {
    for (let i = 0; i < number; i++) {
        if (list === null) {
            return undefined;
        }
        list = list.rest;
    }
    return list.value;
}
function nth(list, number = 0) {
    if (list === null) {
        return undefined;
    }
    if (number === 0)
        return list.value;
    return nth(list.rest, number - 1);

}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
