function loop(a, test, update, main) {
    if (!test(a)) {
        return 0;
    }
    main(a);
    a = update(a);
    loop(a, test, update, main);
}
loop(3, n => n > 0, n => n - 1, console.log);