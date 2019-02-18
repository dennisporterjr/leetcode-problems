var loops = 0;
var largestPalindromeNumberA = function(n) {
    var table = {};
    var other = 0;
    var product = 0;
    var largest = 0;

    for (var j = n; j > n/2; j--) {
        other = j;

        while(other > n/2) {
            loops++;
            product = j * other;
            if (isPalindromeNumber(product)) {
                largest = Math.max(largest, product);
            }
            other--;
        }
    }

    return largest;

    function isPalindromeNumber(k) {
        var str1 = k.toString();
        var str2 = str1.split("").reverse().join("");
        return str1 == str2;
    }
};

var largestPalindromeNumber = function(n) {
};

console.log(largestPalindromeNumber(process.argv[2]));
console.log({loops});