
var multiplesUnderN = function (n) {
    var divisors = [3, 5];
    var dLen = divisors.length;
    var table = {};
    var num = 0;
    var multiple = 0;
    var sum = 0;

    for (var j = 0; j < dLen; j++) {
        num = divisors[j];
        multiple = num;

        while (num < n) {
            if (table[num] === undefined) {
                table[num] = true;
                sum += num;
            }
            num += multiple;
        }
    }

    return sum;
};

console.log("\n");
console.log(multiplesUnderN(1000));