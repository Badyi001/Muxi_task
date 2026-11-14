
function countBs(a) {
    return countChar(a, 'B');
}
function countChar(b, c) {
    let count = 0;
    for (i = 1; i <= b.length; i++) {
        if (c === b[i - 1])
            count++;
    }
    return count;
}
console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));