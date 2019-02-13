var S = "aa";
var T = "aa";

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var begin = 0;
    var end = 0;
    var sLen = s.length;
    var tLen = t.length;
    var endChar = "";
    var table = {};
    var counter = 0;
    var ans = "";
    var ansLen = Infinity;

    // console.log("tlen: " + tLen)
    // create a letter frequency table
    for (var i = 0; i < tLen; i++) {
        // console.log("i = " + i);
        if (table[t[i]]) {
            table[t[i]]++;
        } else {
            table[t[i]] = 1;
            counter++;
        }
        // console.log("table: " + JSON.stringify(table));
    }

    while (end < sLen) {
        // console.log("end: " + end);
        endChar = s[end];
        // console.log("\n*********************");
        // console.log("endchar: " + endChar);

        if (table[endChar] !== undefined) {
            table[endChar]--;

            if (table[endChar] === 0) {
                counter--;
            }
        }

        // console.log("candidate: " + s.substr(begin, end - begin + 1));
        // console.log("counter: " + counter);

        while (counter === 0) {
            // console.log("begin: " + begin);

            if (begin > end) {
                break;
            }

            if (end-begin < ansLen) {
                ansLen = end - begin;
                ans = s.substr(begin, end - begin + 1);
                // console.log("ans candidate: " + ans + ", t = " + t);
            }

            var startChar = s[begin];
            if (table[startChar] !== undefined) {
                table[startChar]++;
                
                if (table[startChar] > 0) {
                    counter++;
                }
            }
            begin++;
        }
        end++;
    }

    return ans;
};

console.log(minWindow(S, T));
