let num = 1;
while (num <= 100) {
    //对于可以被 3 和 5 整除的数字，打印"FizzBuzz"
    if (num % 5 === 0 && num % 3 === 0) {
        console.log('FizzBuzz');
    }
    else if (num % 3 === 0) {
        console.log('Fizz');
    }
    else if (num % 5 === 0 && num % 3 != 0) {
        console.log('Buzz');
    }
    else {
        console.log(num);
    }
    num++;
}