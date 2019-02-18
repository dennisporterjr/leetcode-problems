
var evenFibonacci = function (n) {
    var curr = 2;
    var last = 1;
    var fibb = 0;
    var sum = 2;
    var evens = [2];

    while (fibb < n) {
        fibb = curr + last;
        last = curr;
        curr = fibb;

        if (fibb%2 === 0 && fibb < n) {
            evens.push(fibb);
            sum += fibb;
        }
    }
    console.log(evens);

    return sum;
};

console.log(evenFibonacci(4000000));