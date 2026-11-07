const size = 8;
let t = 1, content = '';
while (t <= size) {
    if (t % 2 === 0) {
        content = content + '# # # # \n';
    }
    else {
        content = content + ' # # # #\n';
    }
    t++;
}
console.log(content);
