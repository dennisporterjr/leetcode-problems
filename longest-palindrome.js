
var longestPalindrome = function (str) {
    var ans = "";
    var table = {};
    var sLen = str.length;
    var i = 0;
    var half = 0;
    var mid_char = "";
    var right = "";
    var left = "";

    for (; i < sLen; i++) {
        if (table[str[i]] === undefined) {
            table[str[i]] = 1;
        } else {
            table[str[i]]++;
        }
    }

    for (var p in table) {
        // odd occuring letter
        if (table[p]%2 !== 0) {
            // if no mid_char, set one..
            if (mid_char === "") {
                mid_char = p;
            }
            // every other odd char should be decremented so we can use the
            // even chars that are left.
            table[p]--;
        }
        console.log("\n");
        console.log({table, mid_char});

        // construct right half of palindrome from even chars
        if (table[p] > 0 && table[p]%2 === 0) {
            console.log("even char: " + p);
            half = table[p]/2;
            for (var k = 0; k < half; k++) {
                right += p;
            }
            console.log({right});
        }
    }

    left = right.split("").reverse().join("");
    ans = left + mid_char + right;

    return ans;
};

var arg = "ABBDABDD";
console.log("The longest palindrome of '" + arg + "', is :'" + longestPalindrome(arg) + "'");