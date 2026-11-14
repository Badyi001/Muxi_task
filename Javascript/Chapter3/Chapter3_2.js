function isEven(b) {
    if (b < 0) b = -b;
    if (b === 0)
        return true;
    else if (b === 1)
        return false;
    else {
        b = b - 2;
        return isEven(b);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));