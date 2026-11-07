const size = 10;
let r = 1, c = 1, content = '';
while (r <= size) {
    c = 1;
    while (c <= size) {
        if (r % 2 === 0) {
            if (c % 2 === 0) {
                content = content + '#';
            }
            else {
                content = content + ' ';
            }
        }
        else {
            if (c % 2 === 0) {
                content = content + ' ';
            }
            else {
                content = content + '#';
            }
        }
        c++;
    }
    r++;
    content = content + '\n';
}
console.log(content)
