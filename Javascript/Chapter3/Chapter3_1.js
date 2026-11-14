function min(a, b) {
    let minNumber;
    if (a < b) {
        minNumber = a;
    }
    else { minNumber = b; }
    return minNumber;
}
console.log(min(0, 10));
console.log(min(0, -10));