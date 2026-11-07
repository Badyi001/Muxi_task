let t = 1, line = '';
while (t <= 7) {
    let i = 1; line = '';
    while (i <= t) {
        line = line + '#';
        i++;
    }
    console.log(line);
    t++;
}
