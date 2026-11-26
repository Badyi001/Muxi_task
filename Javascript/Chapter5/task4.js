const SCRIPTS = [
    { name: "Latin", ranges: [[65, 91], [97, 123]], direction: "ltr", living: true },
    { name: "Arabic", ranges: [[1536, 1541], [1568, 1611]], direction: "rtl", living: true },
    { name: "Cyrillic", ranges: [[1024, 1157]], direction: "ltr", living: true },
    { name: "Mongolian", ranges: [[6144, 6176]], direction: "ttb", living: true },
    { name: "Coptic", ranges: [[994, 1008]], direction: "ltr", living: false }
];
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.find(c => c.name == name);
        if (!known) {
            counts.push({ name, count: 1 });
        } else {
            known.count++;
        }
    }
    return counts;
}
/*以上来自书*/
function dominantDirection1(text) {
    for (let char of text) {
        let code = char.codePointAt(0);
        let a = characterScript(code);
        for (let script of SCRIPTS) {
            if (a.name == script.name) {
                return script.direction;
            }
        }
    }

}
function dominantDirection(text) {
    for (let char of text) {
        let code = char.codePointAt(0);
        let a = characterScript(code);
        let alist = [];
        for (let script of SCRIPTS) {
            if (a.name == script.name) {
                alist.push(script.direction);
            }
        }
    }
    let result = countBy(alist, n => n === rtl);
    let b;
    for (let bloon of result) {
        let b = bloon.count;
        b > bloon.count ? b : bloon.count;
    }
    const target = result.find(result => result.count === b);
    if (target.name === false) {
        return false;
    }
    else
        return true;
}


console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));