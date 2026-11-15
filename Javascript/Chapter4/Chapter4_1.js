function range(start, end, stepLength = 1) {
    let a = [];
    for (let i = 0, b = 0; 1; i++) {
        if (end < start) {
            if (start + b < end)
                break;
            a[i] = start + b;
            b += stepLength;
        }
        else {
            if (start + b > end)
                break;
            a[i] = start + b;
            b += stepLength;
        }

    }
    return a;
}
function sum(array) {
    let sumNumber = 0;
    for (i = 0; i <= array.length - 1; i++) {
        sumNumber += array[i];
    }
    return sumNumber;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range(3, 3));     