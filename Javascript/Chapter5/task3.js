function every(array, test) {
    let a;
    for (i = 0; i < array.length; i++) {
        a = array[i];
        if (!test(a)) {
            return false;
        };
    }
    return true;
}
function every2(array, test) {
    return !array.some(a => !test(a));
}



console.log(every2([1, 3, 5], n => n < 10));
console.log(every2([2, 4, 16], n => n < 10));
console.log(every2([], n => n < 10));
