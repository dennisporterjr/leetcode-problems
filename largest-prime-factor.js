
var largestPrimeFactor = function (n) {
    var factor = 2;
    var factors = [];
    var fLen = 0;
    var sqrtn = Math.sqrt(n);
    var table = {};
    var compliment = 0;

    // get factors
    while (factor < sqrtn) {
        if (table[factor] === undefined && factor%2 !== 0) {
            if (n%factor === 0) {
                table[factor] = factor;
                factors.push(factor);
                compliment = n/factor;

                if (table[compliment] === undefined) {
                    table[compliment] = compliment;
                    factors.push(compliment);
                }
            }
        }
        factor++;
    }

    factors.sort((a,b) => { return b-a; });
    fLen = factors.length;

    for (var k = 0; k < fLen; k++) {
        var end = k+1;
        var isPrime = true;

        while (end < fLen) {
            // if not prime
            if (factors[k]%factors[end] === 0) {
                isPrime = false;
                break;
            }
            end++;
        }

        if (isPrime) {
            return factors[k];
        }
    }
};

console.log(largestPrimeFactor(process.argv[2]));