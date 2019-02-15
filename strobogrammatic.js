var log = console.log;

/**
 * @description https://leetcode.com/problems/strobogrammatic-number/
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    var numLen = num.length;
    var sameRotated = ["8", "0", "1"];
    var opposites = {
        "6": "9",
        "9": "6"
    };
    var left = "";
    var right = "";
    var isStrob = true;

    for (var i = 0; i < numLen/2; i++) {
        isStrob = false;
        left = num[i];
        right = num[numLen-1-i];

        if (left === right && sameRotated.indexOf(left) > -1) {
            isStrob = true;
        } else if (opposites[left] === right) {
            isStrob = true;
        }

        if (isStrob === false) break;
    }

    return isStrob;
};

log(isStrobogrammatic("69"));
log(isStrobogrammatic("25"));
log(isStrobogrammatic("88"));
log(isStrobogrammatic("0880"));
log(isStrobogrammatic("0881"));
log(isStrobogrammatic("962"));
