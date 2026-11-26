class Group {
    constructor() {
        this.a = [];
    }
    add(v) {
        let flag = 1;
        for (let i = 0; i < this.a.length; i++) {
            if (this.a[i] != v) {
                flag *= 1;/*不同时不改变flag*/
            }
            else
                flag *= 0;/*相同时改变flag = 0，且后续不可变*/
        }
        if (flag === 1) {
            this.a.push(v)
        }
        return this.a;

    }
    delete(v) {
        for (let i = 0; i < this.a.length; i++) {
            if (this.a[i] === v) {
                this.a = this.a.filter(num => num != v);
            }
        }
        return this.a;
    }
    has(v) {
        for (let i = 0; i < this.a.length; i++) {
            if (this.a[i] === v) {
                return true;
            }
        }
        return false;
    }
    static from(a) {
        const group = new Group()
        for (let value of a) {
            group.add(value);
        }
        return group;
    }

}





let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
