function reverseArray(array) {
    let reArray = [];
    for (let i = 0; i < array.length; i++) {
        reArray[array.length - 1 - i] = array[i];
    }
    return reArray;
}
function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
}
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
reverseArrayInPlace(myArray);
console.log(myArray);